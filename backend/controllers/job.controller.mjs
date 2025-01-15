import Job from "../models/jobModel.mjs"
export const postJob = async (req,res) => {
  try {
    const {title,description,requirements,salary,location,jobType,position,experience,companyId} = req.body;
    let userId = req.id;
    if(!title || !description || !requirements || !salary || !location || !jobType || !position || !experience || !companyId)
      return res.status(400).json({
        message : "Please fill all the fields",
        success : false
      })
      const job = await Job.create({
        title,
        description,
        requirements : requirements.salary,
        salary : Number(salary),
        location,
        jobType,
        position,
        experienceLevel : experience,
        company : companyId,
        created_by : userId
      })
      return res.status(201).json({
        message : "Job created successfully",
        job,
        success : true
      })
  } catch (error) {
    return res.status(404).json({
      message : error.message,
      success : false
    })
  }
}

export const getAllJob = async (req,res) => {
  try {
    const keyword = req.query.keyword || "";
    const query = {
      $or :{
        title : {
          $regex : keyword,
          $options : "i"
        },
        description : {
          $regex : keyword,
          $options : "i"
        }
      }
    }   
    const jobs = await Job.find({})
    .populate({ path : "company"});
    if(!jobs)
      return res.status(404).json({
        message : "No jobs found",
        success : false
      })
      return res.status(200).json({
        jobs,
        success : true
      })
  } catch (error) {
    return res.status(404).json({
      message : error.message,
      success : false
    })
  }
}

export const getJobById = async (req,res) => {
  try {
    const job = await Job.findById(req.params.id).populate({
      path : 'applications'
    })
    // .populate("company","name email");
    if(!job)
      return res.status(404).json({
        message : "Job not found",
        success : false
      })
      return res.status(200).json({
        job,
        success : true
      })
  }
  catch(error){
    return res.status(404).json({
      message : error.message,
      success : false
    })
  }
}

export const getAdminJobs = async (req,res) => {
  try {
    let adminId = req.id;
    const jobs = await Job.find({created_by : adminId})
    // .populate("company","name email");
    if(!jobs)
      return res.status(404).json({
        message : "No jobs found",
        success : false
      })
      return res.status(200).json({
        jobs,
        success : true
      })
  } catch (error) {
    return res.status(404).json({
      message : error.message,
      success : false
    })
  }
}