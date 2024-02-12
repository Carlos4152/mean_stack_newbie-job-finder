
import express from 'express';
import { getImages, postImage, updateImage, upload} from '../controllers/userImagesController.js';
import { checkToken } from '../middleware/auth.middleware.js';

const imageRouter = express.Router();

imageRouter.get('/images/profile', checkToken, getImages);
imageRouter.post('/images/profile', upload.single('imageProfile') , checkToken, postImage);
imageRouter.put('/images/profile', upload.single('imageProfile') , checkToken, updateImage);


export { imageRouter }

