import express from 'express';
import { deleteUserProfile, getApplicationById, getApplications, getUserProfile, postApplication, removeApplication, saveUserProfile, updateUserProfile, userLogin, userRegistration } from '../controllers/userControllers.js';
import { checkToken } from '../middleware/auth.middleware.js';

const userRouter = express.Router();

// POST: http://localhost:3000/user/registration
userRouter.post('/registration', userRegistration);

// POST: localhost:3000/user/login
userRouter.post('/login', userLogin);

//POST: http://localhost:3000/users/application 
userRouter.post('/applications', checkToken, postApplication);

//GET: http://localhost:3000/user/applications 
userRouter.get('/applications/', checkToken, getApplications);

//GET: http://localhost:3000/user/applications/ID
userRouter.get('/application/:appId', checkToken, getApplicationById);

//GET: http://localhost:3000/user/applications/ID
userRouter.delete('/application/:appId', checkToken, removeApplication);


userRouter.post('/profile', checkToken, saveUserProfile);

userRouter.put('/profile', checkToken, updateUserProfile);

userRouter.delete('/profile/:userId', checkToken, deleteUserProfile);

userRouter.get('/profile/:userId', checkToken, getUserProfile)

export { userRouter }
