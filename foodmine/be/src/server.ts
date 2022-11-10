import express from "express";
import cors from "cors";
import { sample_foods, sample_tags, sample_users } from "./data";
import jwt from "jsonwebtoken";

const app = express();
const PORT = "5000";

app.use(cors({
    credentials: true,
    origin:["http://localhost:4200"]
}));

app.use(express.json());

app.get("/api/foods", (req, res) => {
    res.send(sample_foods);
})

app.get("/api/foods/search/:searchTerm", (req, res) => {
    const searchTerm = req.params.searchTerm;
    const foods = sample_foods.filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));
    res.send(foods);
});

app.get("/api/foods/tags", (req,res) => {
    res.send(sample_tags)
})

app.get("/api/foods/tags/:tagName", (req,res) => {
    const tagName = req.params.tagName;
    const tags = sample_foods.filter(food => food.tags?.includes(tagName));
    res.send(tags);
})

app.get("/api/foods/:foodId", (req,res) => {
    const foodId = req.params.foodId;
    const food = sample_foods.find(food => food.id === foodId);
    res.send(food);
})

app.post("/api/users/login", (req,res) => {
    const { email , password} = req.body;
    const user = sample_users.find(user => user.email === email && user.password === password);
    if(user) {
        const token = generateTokenResponse(user)
        res.send(token);
    } else {
        res.status(400).send('User name or password not valid');
    }
})

const generateTokenResponse = (user: any) => {
    const token = jwt.sign({
        email: user['email'], isAdmin: user['isAdmin']
    }, "somerandamtexttogeneratetokenthisiskey", {expiresIn: "1d"})
    user.token = token;
    return user;
}

app.listen(PORT, ()=> {
    console.log(`App running on port ${PORT}`);
});

