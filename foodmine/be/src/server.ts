import express from "express";
import cors from "cors";
import foodRouter from './router/food.router';
import { sample_users } from "./data";
import jwt from "jsonwebtoken";

const app = express();
const PORT = "5000";
app.use(cors({
    credentials: true,
    origin:["http://localhost:4200"]
}));

app.use(express.json());
app.use("/api/foods", foodRouter);


app.post("/api/users/login", (req,res) => {
    const { email , password} = req.body;
    const user = sample_users.find(user => user.email === email && user.password === password);
    if(user) {
        const token = generateTokenResponse(user)
        res.send(token);
    } else {
        res.status(400).send('User name or password not valid');
    }
});

const generateTokenResponse = (user: any) => {
    const token = jwt.sign({
        email: user['email'], isAdmin: user['isAdmin']
    }, "somerandamtexttogeneratetokenthisiskey", {expiresIn: "1d"})
    user.token = token;
    return user;
};

app.listen(PORT, ()=> {
    console.log(`App running on port ${PORT}`);
});

