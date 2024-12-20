import express from "express";
import isAuthenticated from "../middleware/isAuthenticated.mjs";
import { getCompany, getCompanyById, registerCompany, updateCompany } from "../controllers/company.controller.mjs";

let router = express.Router();


router.post('/register',isAuthenticated,registerCompany)
router.get('/get',isAuthenticated,getCompany)
router.get('/get/:id',isAuthenticated,getCompanyById)
router.put('/update/:id',isAuthenticated,updateCompany)
export default router