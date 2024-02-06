import bcrypt from "bcrypt"
import DB from "../config/db.js"

export const hashPassword = (req, res, next) => {
    if (req.body?.password) {
        bcrypt.hash(req.body.password, 10, (error, hash) => {
            if (error) return res.status(500).json({ 'error': "Something went wrong with hash", error })
            req.body.password = hash
            return next()
        })
    }
}

export const comparePassword = async (req, res, next) => {
    let isAuth
    const findedUser = await DB.User.findOne({where: {name: req.body?.name}}) 
    if (findedUser?.password){
        req.auth = findedUser;
        isAuth = await bcrypt.compare(req.body?.password, findedUser.password)
    }
    
    return isAuth ? next() : res.status(401).json({message: "Login or password invalid"})
}