import express from "express";
import mongoose from "mongoose"
import dotenv from "dotenv";
import cors from "cors";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import { connectDB } from "./config/db.js";
const app = express();
app.use(express.json()); //jo bhi data hum body se bhej rhe hai use json mein parse krega

dotenv.config();

const PORT = process.env.PORT || 4000;
//const URI = process.env.MongoDBURI;

// connect to mongoDB
connectDB();
// try {
//     mongoose.connect(URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     });
//     console.log("Connected to mongoDB");
// } catch (error) {
//     console.log("Error: ", error);
// }
app.use(cors());
app.use("/book", bookRoute);
app.use("/user", userRoute);  // this is API

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})