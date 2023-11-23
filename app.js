import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import dbConnect from "./config/databaseConfig.js";
import mongoose from "mongoose";
import Quiz from "./model/quizSchema.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
dotenv.config();

dbConnect();

// faltu apis ahead
app.get("/hello/:name", (req, res) => {
  res.json({ message: `Hello ${req.params.name}` });
});

app.get("/uploadQuestion", (req, res) => {
  res.send(req.headers);
});

// kaam ki apis ahead

app.post("/createQuiz", async (req, res) => {
  const { quizId, question } = req.body;
  let quiz = Quiz.findOne({ quizId: quizId });

  
});

app.listen(8030, () => {
  console.log("Server started on port 8030");
});
