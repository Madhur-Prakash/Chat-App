import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB connected to DB: ${conn.connection.db.databaseName}`);
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};
