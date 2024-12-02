import userModel from "../models/userModel.mjs";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'



export const register = async(req,res)=>{
  try{
    let {fullname,email,password} = req.body;
    let hash = await bcrypt.hash(password,10);
    let user = await userModel.create({
      fullname,
      email,
      password : hash
    })
    let token = jwt.sign({email,userId:user._id},process.env.SECRET_KEY);
    res.status(200).json({
      token,
      user,
      message : 'user created',
      success : true
    })
  }catch(err){
    return res.status(200).json({
      message : err.message,
      success : false
    })
  }
}
export const login = async(req,res)=>{
  try{
    let {email,password} = req.body;
    let user = await userModel.findOne({email});
    let userExists = await bcrypt.compare(password,user.password);
    let token = jwt.sign({email,userId:user._id},process.env.SECRET_KEY);
    res.status(200).json({
      token,
      user,
      message : 'user login',
      success : true
    })
  }catch(err){
    return res.status(200).json({
      message : err.message,
      success : false
    })
  }
}