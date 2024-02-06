import "dotenv/config"
import express from "express"
import db from "./config/db.js"
import router from "./src/router/index.js"

const PORT = process.env.PORT

const app = express()

app.use(express.json())
app.use(router)

db.sequelize
    .authenticate()
    .then(() => {
        app.listen(PORT, () => console.log("Server is listening on port : ", PORT))
    })
    .catch((err) => console.error('Connection error to db : ', err.message) )


