import userModel from "../models/userModel.mjs";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    let { fullname, email, phoneNumber, password, role } = req.body;
    if (!fullname || !email || !phoneNumber || !password || !role) {
      res.status(400).json({
        message: "Something is missing",
        success: false,
      });
    }
    let user = await userModel.findOne({ email });
    if (user)
      return res.json({
        message: "user already exists with this email",
        success: false,
      });
    let hashedPassword = await bcrypt.hash(password, 10);
    await userModel.create({
      fullname,
      email,
      phoneNumber,
      password: hashedPassword,
      role,
    });
    res.status(200).json({
      message: "Account created successfully",
      success: true,
    });
  } catch (err) {
    return res.status(200).json({
      message: err.message,
      success: false,
    });
  }
};
export const login = async (req, res) => {
  try {
    let { email, password, role } = req.body;
    if (!email || !password || !role) {
      res.status(400).json({
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
        httpsOnly: true,
        sameSite: "strict",
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
    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      message: "Logged out successfully",
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      success: false,
    });
  }
};
export const updateProfile = async (req, res) => {
  try {
    let { fullname, email, phoneNumber, bio, skills } = req.body;
    if (!fullname || !email || !phoneNumber || !bio || !skills) {
      res.status(400).json({
        message: "Something is missing",
        success: false,
      });
    }

    // cloudinary ayega idher

    let skillArray = skills.split(",");
    let userId = red.id;

    let user = await userModel.findById(userId);
    if (!user) {
      return res.status(400).json({
        message: "User not found",
        success: false,
      });
    }
    user.fullname = fullname;
    user.email = email;
    user.phoneNumber = phoneNumber;
    user.profile.bio = bio;
    user.profile.skills = skillArray;
    await user.save();
    user = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };
     return res.status(200).json({
        message : `Profile updated successfully`,
        user,
        success : true
      })
  } catch (err) {
    return res.status(200).json({
      message: err.message,
      success: false,
    });
  }
};
