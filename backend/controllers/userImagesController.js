//import fs from 'node:fs';
import Image from '../models/imageModel.js';
import cloud from '../utils/cloudinary.js'


const postImage = async (req, res) => {
  try {
    const imageBuffer = req.file.buffer;
    
    if (!req.file) return res.status(400).json({ message: 'No file uploaded' });
    
    const imageBase64 = imageBuffer.toString('base64')

    const result = await cloud.uploader.upload(`data:${req.file.mimetype};base64,${imageBase64}`, { resource_type: 'auto' });

    const newImage = await Image.create({
      userId: req.user,
      name: req.file.originalname,
      imageUrl: result.secure_url,
      imageId: result.public_id
    });

    res.status(200).json(newImage);
    
  } catch (error) {
    res.status(400).json({ message: 'Something is not right carlos' })
  }
}


const updateImage = async (req, res) => {
  try {

    const userId = req.user;
    const imageBuffer = req.file.buffer;
    const imageBase64 = imageBuffer.toString('base64')

    const result = await cloud.uploader.upload(`data:${req.file.mimetype};base64,${imageBase64}`, { resource_type: 'auto' });

    const userProfile = await Image.findOne({ userId });
    const updatedPicture = await Image.findByIdAndUpdate(userProfile._id, { 
      imageUrl: result.secure_url,
      name: saveImage(req.file),
    }, { new: true });
    res.send(updatedPicture)
  } catch (error) {
    res.status(400).json({ message: 'Something is not right carlos' })
  }
}

const getImages = async (req, res) => {
  try {
    const images = await Image.findOne({ userId: req.user });
    
    const imageUrl = images.imageUrl;
    res.status(200).json(imageUrl)
  } catch (error) {
    res.status(400).json({ message: 'Something is not right carlos' })
  }
}



export { postImage, updateImage, getImages }