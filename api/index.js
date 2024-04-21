import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Connected to MongodDB!"))
  .catch((err) => console.log(err));

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});
