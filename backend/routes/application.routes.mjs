import express from "express";
import isAuthenticated from "../middleware/isAuthenticated.mjs";
import { applyJob, getApplications, getAppliedJobs, updateStatus } from "../controllers/application.controllers.mjs";

let router = express.Router();


router.get('/apply/:id',isAuthenticated,applyJob)
router.get('/get',isAuthenticated,getAppliedJobs)
router.get('/:id/applicants',isAuthenticated,getApplications)
router.put('/:id/update',isAuthenticated,updateStatus)
export default router