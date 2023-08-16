import User from '@/models/User';
import mongoose from 'mongoose';


const connectDB = async (req, res) => {
const url = process.env.MONGO_URI;
  await mongoose.connect(url);

   const data = await User.find({});
//    const test = await User.create({name:"hafiz",mobile:'017652222'})
   console.log(data)
   return res.status(200).json(data)
};

export default connectDB;
