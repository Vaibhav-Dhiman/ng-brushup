
import { Router } from 'express';
import { sample_foods, sample_tags } from "../data";
import asyncHandler from 'express-async-handler';
import { FoodModel } from '../models/food.model';

const router = Router();

export default router;

router.get("/seed", asyncHandler(
    async(req, res) => {
        const foodsCount = await FoodModel.countDocuments();
        if(foodsCount > 0) {
            res.send('seed already done!')
            return;
        }
        await FoodModel.create(sample_foods);
        res.send('seeding done!');
    }
));

router.get("/", async(req, res) => {
    const foods = await FoodModel.find({});
    res.send(foods);
});

router.get("/search/:searchTerm", (req, res) => {
    const searchTerm = req.params.searchTerm;
    const foods = sample_foods.filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));
    res.send(foods);
});

router.get("/tags", (req,res) => {
    res.send(sample_tags)
});

router.get("/tags/:tagName", (req,res) => {
    const tagName = req.params.tagName;
    const tags = sample_foods.filter(food => food.tags?.includes(tagName));
    res.send(tags);
});

router.get("/:foodId", (req,res) => {
    const foodId = req.params.foodId;
    const food = sample_foods.find(food => food.id === foodId);
    res.send(food);
});
