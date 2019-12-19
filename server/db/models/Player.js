import mongoose from 'mongoose';

const mongooseSchema = new Mongoose.Schema({
  name: String,
  picture: String, // url
  target: String,
  admins: Array,
});