// lib/dbConnect.js
import mongoose from 'mongoose';

const MONGODB_URI = "mongodb+srv://scjha:scjha@scjha.2lrf0dr.mongodb.net/?retryWrites=true&w=majority&appName=scjha";


let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
