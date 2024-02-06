import jwt from 'jsonwebtoken'

export const tokenEncode = (req, _res, next) => {
    req.auth = jwt.sign(
        {user: {
            id: req.auth.id,
            role: req.auth.role
        }},
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
    )
    return next()
}

// ------------- à mes souhaits ----------------//
export const isGranted = (role = 'USER') => (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        req.auth = jwt.verify(token, process.env.JWT_SECRET).user
        const haveRole = req.auth.role.find(r => r === role)
        if (!haveRole){
            res.status(401).json({ message: `Unauthorized : You must have role ${role}` })
        } else return next()
    } catch (e) {
        res.status(401).json({ message: "You must be connected" })
    }
}