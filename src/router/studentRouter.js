import { Router } from "express";
import { isGranted } from "../../middlewares/jwt.js";
import studentController from "../controllers/studentController.js";

const studentRouter = Router()

studentRouter
    .get('/', isGranted(), studentController.getStudents)
    .post('/', isGranted('ADMIN'), studentController.addStudent)
    .put('/:studentId', isGranted('ADMIN'), studentController.updateStudent)
    .delete('/:studentId', isGranted('ADMIN'), studentController.deleteStudent)
    
export default studentRouter