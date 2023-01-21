import mongoose from 'mongoose';
import { config } from "dotenv";
config();

mongoose.set("strictQuery", false);
mongoose.connect(
    process.env.MONGO_URL,
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
    }
    );

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));

db.once("open", function () {
    console.log("Connected to database");
  });

export default db;