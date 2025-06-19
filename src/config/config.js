import dotenv from "dotenv";
dotenv.config();

export const config = {
    PORT: process.env.PORT ?? 8080,
    HOST: process.env.HOST ?? "127.0.0.1",
    MONGO_URI: process.env.MONGO_URI
}