import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDb from "./config/db.js";
import userRouter from "./router/userRouter.js";
import cors from "cors";

dotenv.config();
connectDb();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const port = process.env.PORT || 8000;

app.use("/api/user", userRouter);
app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(port, () => {
  console.log("server running at port 5000");
});
