import userModel from "../models/userModel.mjs";


export const register = async(req,res)=>{
  try{
    let {fullname,email,password} = req.body;
    let user = await userModel.create({
      fullname,
      email,
      password
    })
    res.status(200).json({
      user,
      message : 'user created',
      success : true
    })
  }catch(err){
    res.status(200).json({
      message : error.message,
      success : false
    })
  }
}