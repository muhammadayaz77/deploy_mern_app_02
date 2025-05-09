import { Company } from "../models/companyModel.mjs";
import getDataUri from '../config/dataUri.mjs'
import cloudinary from '../config/cloudinary.mjs'

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
export const updateCompany = async (req, res) => {
  try {
    const { name, description, website, location } = req.body;
    let logo;

    // ✅ Only upload to Cloudinary if a file is provided
    if (req.file) {
      const file = req.file;
      const fileUri = getDataUri(file);
      const cloudResponse = await cloudinary.uploader.upload(fileUri.content);
      logo = cloudResponse.secure_url;
    }

    // Build update data dynamically
    const updateData = {};
    if (name) updateData.name = name;
    if (description) updateData.description = description;
    if (website) updateData.website = website;
    if (location) updateData.location = location;
    if (logo) updateData.logo = logo;

    const company = await Company.findByIdAndUpdate(req.params.id, updateData, { new: true });

    if (!company) {
      return res.status(400).json({
        message: "Company not found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Company information updated",
      company,
      success: true,
    });

  } catch (error) {
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};
