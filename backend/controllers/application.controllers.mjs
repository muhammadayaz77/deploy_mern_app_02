import { Application } from "../models/applicationModel.mjs";
import Job from "../models/jobModel.mjs";
import userModel from "../models/userModel.mjs";

export const applyJob = async (req, res) => {
  try {
    let jobId = req.params.id;
    let userId = req.id;
    if (!jobId) return res.status(404).json({
      message: "Job Id is required",
      success: false
    });
    let existingApplication = await Application.findOne({job:jobId,applicant:userId});
    if (existingApplication) return res.status(404).json({
      message: "You already have apply for this job",
      success: false
    });
    let job = await Job.findOne({_id : jobId});
    if (!job) return res.status(404).json({
      message: "Job not found",
      success: false
    });
    let application = new Application({
      job : jobId,
      applicant : userId,
      status: "pending"
    });
    job.applications.push(application._id);
    await application.save();
    await job.save();
    return res.status(201).json({
      message: "Application submitted",
      success: true
    });
  } catch (error) {
    return res.status(404).json({
      message: error.message,
      success: false
    });
  }
}


export const getAppliedJobs = async (req, res) => {
  try {
    let userId = req.id;
    const applications = await Application.find({applicant:userId}).sort({createdAt:-1}).populate({
      path : 'job',
      options : {sort : {createdAt : -1}},
      populate : {
        path : 'company',
        options : {sort : {createdAt : -1}}
      }
    });
    if (!applications) return res.status(404).json({
      message: "No applications found",
      success: false
    });
    return res.status(200).json({
      applications,
      success: true
    });
  } catch (error) {
    return res.status(404).json({
      message: error.message,
      success: false
    });
  }
}

// admin dekhaya ga k kis kis ne apply kiya ha

export const getApplications = async (req, res) => {
  try {
    let jobId = req.params.id;
    const job = await Job.findById(jobId).sort({createdAt:-1}).populate({
      path : 'applications',
      options : {sort : {createdAt : -1}},
      populate : {
        path : 'applicant',
        options : {sort : {createdAt : -1}}
      }
    });
    if (!job) return res.status(404).json({
      message: "Job not found",
      success: false
    });
    return res.status(200).json({
      job,
      success: true
    });
  } catch (error) {
    return res.status(404).json({
      message: error.message,
      success: false
    });
  }
}

export const updateStatus = async (req, res) => {
  try {
    let applicationId = req.params.id;
    let status = req.body.status;
    if (!status) return res.status(404).json({
      message: "Status is required",
      success: false
    });
    let application = await Application.findById({_id : applicationId});
    if (!application) return res.status(404).json({
      message: "Application not found",
      success: false
    });
    application.status = status.toLowerCase();
    await application.save();
    return res.status(200).json({
      message: "Status updated successfully",
      success: true
    });
  } catch (error) {
    return res.status(404).json({
      message: error.message,
      success: false
    });
  }
}