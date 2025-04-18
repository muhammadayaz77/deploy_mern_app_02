import express from "express";
import { login, logout, register, updateProfile } from "../controllers/user.controller.mjs";
import isAuthenticated from "../middleware/isAuthenticated.mjs";
import { singleUpload } from "../middleware/multer.mjs";

let router = express.Router();


router.post('/create',singleUpload ,register)
router.post('/login',login)
router.get('/logout',logout)   
router.post('/profile/update',isAuthenticated,singleUpload,updateProfile)
export default router