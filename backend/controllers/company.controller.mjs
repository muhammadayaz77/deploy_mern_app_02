import { Company } from "../models/companyModel.mjs";



export const registerCompany = async (req,res) => {
  try {
    let {companyName} = req.body;
    let company = await Company.findOne({name:companyName});
    if(company){
      return res.status(400).json({
        message : "You cannot register same company.",
        success : false
      })
    }
    company = await Company.create({
      name : companyName,
      userId : req.id
    })
    return res.status(201).json({
      message : "Company register successfully",
      company,
      success : true
    })
  } catch (error) {
    res.status(404).json({
      message : error.message,
      success : false
    })
  }
}
export const getCompany = async (req,res) => {
  try {
    const userId = req.id;
    const companies = await Company.find({userId});
    if(!companies){
      return res.status(400).json({
        message : "Company not found",
        success : false
      })
    }
    res.status(200).json({
      companies,
      success : true
    })
  } catch (error) {
    return res.status(404).json({
      message : error.message,
      success : false
    })
  }
}
export const getCompanyById = async (req,res) => {
  try {
    const companyId = req.params.id;
    const company = await Company.findOne({_id :companyId});
    if(!company){
      return res.status(400).json({
        message : "Company not found",
        success : false
      })
    }
    return res.status(200).json({
      company,
      success : true
    })
  } catch (error) {
    return res.status(404).json({
      message : error.message,
      success : false
    })
  }
}
export const updateCompany = async (req,res) => {
  try {
    const {name,description,website,location} = req.body;
    const file = req.file;
    // cloudinary
    const updateData = {name,description,website,location};
    const company = await Company.findByIdAndUpdate(req.params.id,updateData,{new : true});

    if(!company){
      return res.status(400).json({
        message : "Company not found",
        success : false
      })
    }
    return res.status(200).json({
      message : "Company information updated",
      company,
      success : true
    })
  } catch (error) {
    return res.status(404).json({
      message : error.message,
      success : false
    })
  }
}