import express from 'express';
import { postedJobs } from '../controllers/jobsController.js';
import { checkToken } from '../middleware/auth.middleware.js';

const jobRouter = express.Router();

// GET: http://localhost:3000/dashboard/jobs
jobRouter.get('/jobs', checkToken, postedJobs);


export { jobRouter }