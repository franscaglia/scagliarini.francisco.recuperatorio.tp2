import { Router } from "express"
//señalar nmombre y ruta del CONTROLADOR
import { Controller } from "../controller/"

//cambiar nombre por el ROUTER especifico
const router = Router()

//modificar objeto ROUTER y CONTROLLER
//señalar rutas de solicitudes HTTP
router.get("/", Controller.obtenerTodos)
router.get("/", Controller.buscarUno)
router.post("/", Controller.crearUno)
router.put("/", Controller.modificarUno)
router.delete("/", Controller.borrarUno)
//usar --->  /:nombreParam   para USARLO luego en --->  req.params.nombreParam

export { router }