import express from "express";
import { register } from "../controllers/authController.mjs";

let router = express.Router();


router.post('/create',register)
export default router