import { mongoose } from 'mongoose';

const applicationSchema = new mongoose.Schema({
  company:  { type: String, required: true },
  position: { type: String, required: true },
  location: { type: String, required: true },
  salary: { type: String, required: true },
  duties: { 
    desc: { type: String, required: true },
    list: { type: [String], required: true },
  },
  userId: { type: String, required: true}
},
{
  timestamps: true
});


const Applications = mongoose.model("Applications", applicationSchema);

export default Applications;