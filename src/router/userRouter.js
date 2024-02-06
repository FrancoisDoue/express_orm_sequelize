import { Router } from "express";
import userController from "../controllers/userController.js";
import { comparePassword, hashPassword } from "../../middlewares/bcrypt.js";
import { tokenEncode } from "../../middlewares/jwt.js";

const userRouter = Router()

userRouter
    .post('/register', hashPassword, userController.register)
    .post('/login', [comparePassword, tokenEncode], userController.login)

export default userRouter