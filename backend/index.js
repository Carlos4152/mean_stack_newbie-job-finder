import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';



// ROUTES IMPORT
import { userRouter } from './routes/userRoutes.js';
import connectDataBase from './config/database.js';
import { jobRouter } from './routes/jobsRoutes.js';
import { imageRouter } from './routes/userImagesRoutes.js';


dotenv.config();
connectDataBase();


const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(cors());

// USER MANAGER API 
app.use('/user', userRouter); 
app.use('/dashboard', jobRouter); 
app.use('/user', imageRouter)
app.use('/uploads', express.static(path.resolve('uploads')))

app.listen(PORT, () => console.log(`Server is running in PORT ${PORT}`));
