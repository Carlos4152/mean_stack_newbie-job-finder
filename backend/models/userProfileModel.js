import { mongoose } from 'mongoose';

const userProfileSchema = new mongoose.Schema({
  career: {
    type: String,
    required: true
  },
  experience: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  userEmail: {
    type: String,
    required: true,
    unique: [true, "Email address already taken"]
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  postcode: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  }
},
{
  timestamps: true
});


const UserProfile = mongoose.model("Profile", userProfileSchema);

export default UserProfile;