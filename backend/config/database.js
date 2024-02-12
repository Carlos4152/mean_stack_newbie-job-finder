import { mongoose } from 'mongoose';

// Connecting to mongo DB
const connectDataBase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('You are connected to data base');
  } catch (error) {
    console.log('Connection Failed');
    process.exit(1);
  }
}



export default connectDataBase;