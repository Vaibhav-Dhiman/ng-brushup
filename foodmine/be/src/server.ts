import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import cors from "cors";
import foodRouter from './router/food.router';
import userRouter from './router/user.router';
import { dbConnect } from './configs/database.config';

dbConnect();
const app = express();
const PORT = "5000";
app.use(cors({
    credentials: true,
    origin:["http://localhost:4200"]
}));

app.use(express.json());
app.use("/api/foods", foodRouter);
app.use("/api/users", userRouter);


app.listen(PORT, ()=> {
    console.log(`App running on port ${PORT}`);
});

