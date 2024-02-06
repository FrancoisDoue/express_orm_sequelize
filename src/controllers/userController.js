import DB from "../../config/db.js"

export default {
    register: async (req, res) => {
        try{
            const { name, password } = req.body;
            const newUser = await DB.User.create({name, password})
            res.status(201).json(newUser)
        } catch(e) {
            console.error(e)
            res.status(500).json({error: e})
        }
    },
    login: (req, res) => res.status(200).json({token: req?.auth})

}