
import express from 'express';
import { getImages, postImage, updateImage} from '../controllers/userImagesController.js';
import checkToken from '../middleware/auth.middleware.js';
import upload from '../utils/multer.js';

const imageRouter = express.Router();

imageRouter.post('/images/profile', upload, checkToken, postImage);

imageRouter.get('/images/profile', checkToken, getImages);

imageRouter.put('/images/profile', upload, checkToken, updateImage);


export { imageRouter }

