import mongoose from "mongoose";


let userSchema = new mongoose.Schema({
  fullname : {
    type : String,
  },
  email : {
    type : String,
    unique : true,
    require : true
  },
  phoneNumber : {
    type : Number,
    require : true,
  },
  password : {
    type : String,
    require : true
  },
  role : {
    type : String,
    enum : ['student','recruiter'],
    require : true
  },
  profile : {
    bio : {type : String},
    skills : [{type : String}],
    resume : {type : String}, // URL to resume file
    resumeOriginalName : {type : String},
    company : {type : mongoose.Schema.Types.ObjectId, ref : 'Company'},
    profilePhoto : {type:String,default : ""}
  }
},{timestamps : true})

let userModel = mongoose.model('User',userSchema);

export default userModel