import mongoose from 'mongoose';

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });