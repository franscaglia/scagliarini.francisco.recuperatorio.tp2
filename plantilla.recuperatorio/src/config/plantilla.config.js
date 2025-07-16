import dotenv from "dotenv"
dotenv.config()

export const config = {
    HOST: process.env.HOST ?? "127.0.0.1",
    PORT: process.env.PORT ?? 8080,
    MONGO_URI: process.env.MONGO_URI,
    CLUSTER: "armandoMates"
}