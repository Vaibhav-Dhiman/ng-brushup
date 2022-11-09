import express from "express";
import cors from "cors";
import { sample_foods } from "./data";

const app = express();
const PORT = "5000";

app.use(cors({
    credentials: true,
    origin:["http://localhost:4200"]
}));

app.get("/api/foods", (req, res) => {
    res.send(sample_foods);
});

app.listen(PORT, ()=> {
    console.log(`App running on port ${PORT}`);
});

