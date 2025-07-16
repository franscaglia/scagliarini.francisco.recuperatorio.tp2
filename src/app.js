import express from "express"
import { config } from "./config/config.js"
import { cardRouter } from "./router/card.router.js"

import mongoConectionInstance from "./db/mongo.connection.js"
await mongoConectionInstance.connect()

const app = express()
app.use(express.json())

app.use("/tarjetas", cardRouter)

app.listen(config.PORT, () => {
    console.log(` -- Tarjetas node.js : http://${config.HOST}:${config.PORT}/ `)
})