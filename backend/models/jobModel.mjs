import mongoose from "mongoose";


let jobSchema = new mongoose.Schema({
  title : {
    type : String,
    require : true,
  },
  description : {
    type : String,
    require : true,
  },
  requirements : [{
    type : String,
  }],
  salary : {
    type : String,
    require : true,
  },
  location : {
    type : String,
    require : true,
  },
  jobType : {
    type : String,
    require : true,
  },
  position : {
    type : Number,
    require : true,
  },
  company : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'Company',
    require : true,
  },
  experienceLevel : {
    type : String,
    require : true
  },
  created_by : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'User',
    require : true,
  },
  applications : [{
    type : mongoose.Schema.Types.ObjectId,
    ref : 'Application',
  }],
},{timestamps : true})

const Job = mongoose.model('Job',jobSchema)
export default Job;
