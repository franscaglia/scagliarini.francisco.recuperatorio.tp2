import express from "express"

// señalar archivo CONFIG
import { config } from "./config"
//señalar nombre de objeto y ruta ROUTER 
import { router } from "./router"

//señalar nombre de objeto y ruta MONGO
import mongoConnectionInstance from "./db/"
await mongoConnectionInstance.connect()

const app = express()
app.use(express.json())

//señalar ruta en el enlace y objeto ROUTER
app.use("/", router)


// señalar el console log de la APP
app.listen(config.PORT, () => {
    console.log(` -- ??? : http://${config.HOST}:${config.PORT}/ `)
})