import mongoose from "mongoose";
let companySchema = new mongoose.Schema({
  name : {
    type : String,
    require : true,
  },
  description : {
    type : String,
  },
  website : {
    type : String,
  },
  location : {
    type : String,
  },
  logo : {
    type : String,
  },
  userId : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'Company',
    require : true,
  },
 
},{timestamps : true})

export const Company = mongoose.model('Company',companySchema)