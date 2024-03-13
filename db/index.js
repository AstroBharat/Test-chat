import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      "mongodb+srv://anshulastrobharat:Px0QFDl3SRLRD2Ni@astrobharat.0xbstgc.mongodb.net/newTest"
    );
    console.log(
      `🥭  Connected to MongoDB !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("MongoDB connection error  ", error);
    process.exit(1);
  }
};

export default connectDB;
