import  mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
  userId: String,
  name: String,
  imagePath: String
},
{
  timestamps: true
});


const Image = mongoose.model("Images", imageSchema);

export default Image;