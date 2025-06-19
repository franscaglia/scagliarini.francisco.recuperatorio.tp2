import { Router } from "express"
import { CardController } from '../controller/cards.controller.js'

const cardRouter = Router()

cardRouter.get("/verTarjetas", CardController.getAll)
cardRouter.get("/tarjeta/:cardNumber", CardController.searchById)
cardRouter.post("/crearTarjeta", CardController.createOne)
cardRouter.put("/modificarTarjeta/:cardNumber", CardController.modifyOne)
cardRouter.delete("/borrarTarjeta/:cardNumber", CardController.deleteById)

export { cardRouter }