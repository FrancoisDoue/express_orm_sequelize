import { Sequelize } from "sequelize"
import UserModel from "../src/models/userModel.js"
import StudentModel from "../src/models/studentModel.js"

const sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USER,
    process.env.DB_PSW,
    {
        host : process.env.DB_HOST,
        dialect: process.env.DB_DIALECT
    }
)

const User = UserModel(sequelize)
const Student = StudentModel(sequelize)

sequelize
    .sync({force: false})
    .then(() => console.log('Connected to DB'))
    .catch((err) => console.error('Synchronization error : ', err.message))

export default {
    sequelize,
    User,
    Student
}