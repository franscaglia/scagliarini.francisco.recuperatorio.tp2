import mongoose from "mongoose";
import { config } from "../config/config.js";

class MongoConnection {
	constructor() {
		this.connection = null;
	}

	async connect() {
		if (this.connection) {
			return this.connection;
		}

		try {
			await mongoose.connect(config.MONGO_URI, {
				dbName: "armandoMates", //es la misma que estoy usando para el tp 
			});
			this.connection = mongoose.connection;
			console.log(" -- Recuperatorio TP2 -- Conexion establecida con Mongo Atlas");

			return this.connection;
		} catch (e) {
			console.error(" -- no se puedo conectar a Armando Mates de MongoDB");
			throw e;
		}
	}
}

const mongoConnectionInstance = new MongoConnection();
export default mongoConnectionInstance;