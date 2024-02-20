import  mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
  userId: String,
  name: String,
  imageUrl: String,
  imageId: String
},
{
  timestamps: true
});


const Image = mongoose.model("Images", imageSchema);

export default Image;