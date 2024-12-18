import mongoose from "mongoose";


let applicationSchema = new mongoose.Schema({
  job : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'Job',
    require : true,
  },
  applicant : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'User',
    require : true,
  },
  status : {
    type : String,
    enum : ['pending','accepted','rejected'],
    default : 'pending'
  }
 
},{timestamps : true})

export const Application = mongoose.model('Job',applicationSchema)