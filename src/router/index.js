import { Router } from "express";
import studentRouter from "./studentRouter.js";
import userRouter from "./userRouter.js";

const router = Router()

router.use('/', userRouter)
router.use('/students', studentRouter)

export default router