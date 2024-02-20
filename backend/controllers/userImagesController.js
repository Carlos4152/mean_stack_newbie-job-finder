import fs from 'node:fs';
import Image from '../models/imageModel.js';
import cloud from '../utils/cloudinary.js'


const postImage = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: 'No file uploaded' });
    
    const result = await cloud.uploader.upload(req.file.path);

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
    const imageUrl = saveImage(req.file);
    const result = await cloud.uploader.upload(req.file.path);
    console.log(result)
    const userProfile = await Image.findOne({ userId });
    const updatedPicture = await Image.findByIdAndUpdate(userProfile._id, { imageUrl: result.secure_url }, { new: true });
    res.send(updatedPicture)
  } catch (error) {
    res.status(400).json({ message: 'Something is not right carlos' })
  }
}

const getImages = async (req, res) => {
  try {
    const images = await Image.findOne({ userId: req.user });
    console.log(images)
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