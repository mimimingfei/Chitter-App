import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

async function dbConnect(){
  mongoose.connect(process.env.DB_URL)
  .then(() => {
  console.log("Successfully connected to MongoDB Atlas!");
}).catch((err) => {
  console.error('Error connecting to MongoDB', err);
});
}
export default dbConnect;