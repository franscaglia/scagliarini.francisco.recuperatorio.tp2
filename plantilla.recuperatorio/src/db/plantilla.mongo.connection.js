import mongoose from "mongoose"
//señalar archivo CONFIG
import { config } from "../config/"

class MongoConnection {
    constructor () {
        this.connection = null
    }
    async connect(){
        if(this.connection){
            return this.connection
        }
        try {
            await mongoose.connect(config.MONGO_URI, {dbName: config.CLUSTER})
            this.connection = mongoose.connection
            console.log(" -- MongoDB - Conexion establecida")
        }catch (error) {
            console.error(" -- la conexion a MongoDB no pudo realizarse ...")
            throw error
        }
    }
}

const mongoConnectionInstance = new MongoConnection()
export default mongoConnectionInstance