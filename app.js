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

app.post("/addQuestion", async (req, res) => {
  const { quizId, question, opt1, opt2, opt3, opt4, correctOpt } = req.body;

//   console.log(quizId, question, opt1, opt2, opt3, opt4, correctOpt);
  await Quiz.create({ quizId, question, opt1, opt2, opt3, opt4, correctOpt })
    .then((quiz) => {
      console.log(quiz);
      res.json({ quiz });
    })
    .catch((err) => {
      console.log(err);
      res.json({ err });
    })
});

app.listen(8030, () => {
  console.log("Server started on port 8030");
});
