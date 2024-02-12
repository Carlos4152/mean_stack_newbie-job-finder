import { mongoose } from 'mongoose';

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  userEmail: {
    type: String,
    required: true,
    unique: [true, "Email address already taken"]
  },
  password: {
    type: String,
    required: true
  }
},
{
  timestamps: true
});


const User = mongoose.model("Users", userSchema);

export default User;