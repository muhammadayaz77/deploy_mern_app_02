import express from "express";
import { login, logout, register, updateProfile } from "../controllers/user.controller.mjs";
import isAuthenticated from "../middleware/isAuthenticated.mjs";

let router = express.Router();


router.post('/create',register)
router.post('/login',login)
router.post('/logout',logout)
router.post('/profile/update',isAuthenticated,updateProfile)
export default router