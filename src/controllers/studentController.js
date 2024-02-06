import DB from "../../config/db.js"

export default {
    getStudents: async (req, res) => {
        const datas = await DB.Student.findAll()
        if (!datas.length) return res.status(404).json({message: "Students not found"})
        return res.status(200).json(datas)
    },
    addStudent: async (req, res) => {
        try{
            const { name, classe } = req.body;
            const newStudent = await DB.Student.create({name, classe})
            res.status(201).json(newStudent)
        } catch(e) {
            console.error(e)
            res.status(500).json({error: e})
        }
    },
    updateStudent: async( req, res) => {
        const idStudent = req.params.studentId
        try{
            const updateStudent = await DB.Student.update(req.body, {where: {id: idStudent}})
            if (!updateStudent[0]) return res.status(400).json({error: "error"})
            return res.status(204).json({message: "Update ok"})
        } catch(e) {
            console.error(e)
            res.status(500).json({error: e})
        }
    },
    deleteStudent: async(req, res) => {
        const idStudent = req.params.studentId
        try{
            const isDeleted = await DB.Student.destroy({where: {id: idStudent}})
            if (!isDeleted) return res.status(400).json({error: "Something get wrong!"})
            return res.status(204).json({message: "Delete ok"})
        }catch(e){
            console.log(e)
            res.status(500).json({error: e})
        }
    }
}