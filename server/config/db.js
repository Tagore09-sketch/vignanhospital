import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log(`✅ MongoDB Atlas Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`⚠️ MongoDB Atlas Connection Warning: ${error.message}`);
    console.log("ℹ️ Server running. Update process.env.MONGODB_URI in server/.env with your valid Atlas URI.");
  }
};
