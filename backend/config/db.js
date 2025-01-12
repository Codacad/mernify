import mongoose from "mongoose";

const dbConnection = async () => {
  const DB_URI = process.env.DB_URI;
  try {
    const connection = await mongoose.connect(DB_URI);
    const db = connection.connection;
    console.log(`DB is connected to host ${db.host}`);

    const result = await mongoose.connection.db.admin().ping();
    console.log("Ping result:", result)
    
  } catch (error) {
    console.log(error.message);
  }
};

export { dbConnection };
