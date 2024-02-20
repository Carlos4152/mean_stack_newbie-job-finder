import fs from 'node:fs';
import Image from '../models/imageModel.js';
import cloud from '../utils/cloudinary.js'


const postImage = async (req, res) => {
  try {

    const file = req.file;
    
    if (!req.file) return res.status(400).json({ message: 'No file uploaded' });
    
    const result = await cloud.uploader.upload(file.path);

    const newImage = await Image.create({
      userId: req.user,
      name: saveImage(file),
      imageUrl: result.secure_url,
      imageId: result.public_id
    });

    res.status(200).json(newImage);
    
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: 'Something is not right carlos' })
  }
}


const updateImage = async (req, res) => {
  try {
    const userId = req.user;
    const result = await cloud.uploader.upload(req.file.path);

    const userProfile = await Image.findOne({ userId });
    const updatedPicture = await Image.findByIdAndUpdate(userProfile._id, { 
      imageUrl: result.secure_url,
      name: saveImage(file),
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

function saveImage(file) {
  const newPath = `uploads/${file.originalname}`;
  fs.renameSync(file.path, newPath);
  return newPath;
}


export { postImage, updateImage, getImages }