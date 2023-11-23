import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';
import dbConnect from './config/databaseConfig.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
dotenv.config();

dbConnect();

app.get('/helloWorld', (req, res) => {
    res.send('Hello World!');
});







app.listen(8030, () => {
  console.log('Server started on port 8030');
});
