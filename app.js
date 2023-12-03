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
    //   console.log(quiz);
      res.json({ quiz });
    })
    .catch((err) => {
    //   console.log(err);
      res.json({ err });
    })
});

app.get("/getQuiz/:quizId", async (req, res) => {
    const { quizId } = req.params;
  console.log(quizId);
    await Quiz.find({ quizId })
        .then((quiz) => {
            // console.log(quiz);
            res.json({ quiz });
        })
        .catch((err) => {
            // console.log(err);
            res.json({ err });
        })
})

// app.get("/validQuizId/:quizId", async (req, res) => {

//   // Task 1: Check if quizId is valid or not
//   // Task 2: If valid, check if quiz is active or not (active means quiz is live and can be attempted by students and inactive means quiz is over and can't be attempted by students)
//   // Task 3: If valid and active, check if quiz is attempted by student or not
//   // Task 4: If valid, active and not attempted, send quiz to student but i think we should send quiz to student only when he/she clicks on start quiz button which is function of /getQuiz/:quizId api so we can do all these tasks in that api only and send quiz to student only when he/she clicks on start quiz button
//   // Task 5: If valid, active and attempted, send message that quiz is already attempted by you
//   // Task 6: If valid and inactive, send message that quiz is over and can't be attempted by you
//   // Task 7: If invalid, send message that quizId is invalid

// })

app.listen(8030, () => {
  console.log("Server started on port 8030");
});
