import mongoose from 'mongoose';

const db = mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/weather'
);

export default db;
