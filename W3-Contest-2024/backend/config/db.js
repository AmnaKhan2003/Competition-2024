import mongoose from "mongoose";

const connectDb = async () => {
  try {
    console.log("connecting to mongo db");
    const db = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected to MongoDb Account ${db.connection.host}`);
  } catch (error) {
    console.error(`Error Message : ${error.message}`);
    process.exit(1);
  }
};

export default connectDb;
