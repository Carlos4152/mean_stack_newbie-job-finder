import fs from 'node:fs';
import Image from '../models/imageModel.js';
import multer from 'multer';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, './uploads');
  },
  filename: (req, file, cb) => {
      cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

const postImage = async (req, res) => {
  try {
    const newImage = await Image.create({
      userId: req.user,
      name: req.file.originalname,
      imagePath: saveImage(req.file)
    });

    res.status(200).json({  message: 'Image has been uploaded successfully', });
  } catch (error) {
    res.status(400).json({message: 'Something is not right carlos'})
  }
}

const updateImage = async (req, res) => {
  try {
    const userId = req.user;
    const imageUrl =  saveImage(req.file);
    const userProfile = await Image.findOne({ userId });
    const updatedPicture = await Image.findByIdAndUpdate(userProfile._id, { imagePath: imageUrl }, { new: true});
    res.send(updatedPicture)
  } catch (error) {
    res.status(400).json({message: 'Something is not right carlos'})
  }
}

const getImages = async (req, res) => {
  try {
    const images = await Image.findOne({ userId: req.user});
    const imageUrl = `http://localhost:3000/${images.imagePath}`;
     res.status(200).json(imageUrl)
  } catch (error) {
    res.status(400).json({message: 'Something is not right carlos'})
  }
}


function saveImage(file) {
  const newPath = `uploads/${file.originalname}`;
  fs.renameSync(file.path, newPath);
  return newPath;
}

export { postImage, updateImage, getImages, upload}