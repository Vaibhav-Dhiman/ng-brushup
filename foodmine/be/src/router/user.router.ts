import { Router } from 'express';
import { sample_users } from "../data";
import jwt from "jsonwebtoken";
import asyncHandler from 'express-async-handler';
import { User, UserModel } from '../models/user.model';
import { BAD_REQUEST } from '../constants/http.status';
import bcrypt from 'bcryptjs';

const router = Router();

router.get("/seed", asyncHandler(
    async(req, res) => {
        const usersCount = await UserModel.countDocuments();
        if(usersCount > 0) {
            res.send('seed already done!')
            return;
        }
        await UserModel.create(sample_users);
        res.send('seeding done!');
    }
));

router.post("/login", asyncHandler(
    async(req,res) => {
    const { email , password} = req.body;
    const user = await UserModel.findOne({email, password});
    if(user) {
        const token = generateTokenResponse(user)
        res.json({
            token: `${token.token}`,
              id: user._id,
              name: user.name,
              email: user.email,
              address: user.address,
          });
    } else {
        res.status(BAD_REQUEST).send('User name or password not valid');
    }
}));

router.post("/register", asyncHandler(
    async(req, res) => {
        const {name,email,password,address} = req.params;
        const user = await UserModel.findOne({email});
        if(user) {
            res.status(BAD_REQUEST).send('User already exists');
            return;
        }

        const encryptedPassword = await bcrypt.hash(password, 10);
        const newUser: User = {
            id: '',
            name,
            password: encryptedPassword,
            address,
            email: email.toLowerCase(),
            token: '',
            isAdmin: false
        }

        const dbUser = await UserModel.create(newUser);
        res.send(generateTokenResponse(dbUser));
    }
));

const generateTokenResponse = (user: User) => {
    let token = jwt.sign({
        email: user['email'], isAdmin: user['isAdmin']
    }, "somerandamtexttogeneratetokenthisiskey", {expiresIn: "1d"})
    user.token = token;
    return user;
};

export default router;

