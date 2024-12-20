import express from "express";
import isAuthenticated from "../middleware/isAuthenticated.mjs";
import { getAdminJobs, getAllJob, getJobById, postJob } from "../controllers/job.controller.mjs";


let router = express.Router();


router.post('/post',isAuthenticated,postJob)
router.get('/get',isAuthenticated,getAllJob)
router.get('/getadminjobs',isAuthenticated,getAdminJobs)
router.get('/get/:id',isAuthenticated,getJobById)
export default router