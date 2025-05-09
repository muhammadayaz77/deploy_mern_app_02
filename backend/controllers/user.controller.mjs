import userModel from "../models/userModel.mjs";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import getDataUri from "../config/dataUri.mjs";
import cloudinary from "../config/cloudinary.mjs";

export const register = async (req, res) => {
  try {
    let { fullname, email, phoneNumber, password, role } = req.body;
    console.log(req.body)
    if (!fullname || !email || !phoneNumber || !password || !role) {
      return res.status(400).json({
        message: "Something is missing",
        success: false,
      });
    }
      let file = req.file;
      if(!file){
        return res.status(400).json({
          message : "Please enter profile picture",
          success : true,
        })
      }
      let fileUri = getDataUri(file);
    const cloudResponse = await cloudinary.uploader.upload(fileUri.content);

    let user = await userModel.findOne({ email });
    if (user)
      return res.json({
        message: "User already exists with this email",
        success: false,
      });
    let hashedPassword = await bcrypt.hash(password, 10);
    await userModel.create({
      fullname,
      email,
      phoneNumber,
      password: hashedPassword,
      role,
      profile : {
        profilePhoto : cloudResponse.secure_url || ''
      }
    });
    res.status(200).json({
      message: "Account created successfully",
      success: true,
    });
  } catch (err) {
    return res.status(404).json({
      message: err.message,
      success: false,
      
    });
  }
};
export const login = async (req, res) => {
  try {
    let { email, password, role } = req.body;
    if (!email || !password || !role) {
      return res.status(400).json({
        message: "Something is missing",
        success: false,
      });
    }
    let user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Incorrect email or password",
        success: false,
      });
    }
    let checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
      return res.status(400).json({
        message: "Incorrect email or password",
        success: false,
      });
    }
    if (role !== user.role) {
      return res.status(400).json({
        message: "Account doesn't exist with the current role.",
        success: false,
      });
    }
    let token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });
    user = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };
    res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
        secure : false
      })
      .json({
        message: `Welcom back ${user.fullname}`,
        user,
        success: true,
      });
  } catch (err) {
    return res.status(200).json({
      message: err.message,
      success: false,
    });
  }
};
export const logout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: false, // Change to true if using HTTPS
      sameSite: "lax",
    });

    return res.status(200).json({
      message: "Logged out successfully",
      success: true,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
      success: false,
    });
  }
};

export const updateProfile = async (req, res) => {
  try {
    let { fullname, email, phoneNumber, bio, skills } = req.body;
    let userId = req.id;

    let user = await userModel.findById(userId);
    if (!user) {
      return res.status(400).json({
        message: "User not found",
        success: false
      });
    }

    if (fullname) user.fullname = fullname;
    if (email) user.email = email;
    if (phoneNumber) user.phoneNumber = phoneNumber;
    if (bio) user.profile.bio = bio;
    if (skills) user.profile.skills = skills.split(",");

    // ✅ Only run this block if a file is uploaded
    if (req.file) {
      const file = req.file;
      const fileUri = getDataUri(file);
      const cloudResponse = await cloudinary.uploader.upload(fileUri.content);
      user.profile.resume = cloudResponse.secure_url;
      user.profile.resumeOriginalName = file.originalname;
    }

    await user.save();

    const updatedUser = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };

    return res.status(200).json({
      message: `Profile updated successfully`,
      user: updatedUser,
      success: true
    });

  } catch (err) {
    return res.status(500).json({
      message: err.message,
      success: false
    });
  }
};
