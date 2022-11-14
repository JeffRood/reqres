import { Dialect } from "sequelize"
import dotenv from "dotenv"

dotenv.config();

const dbConfig = {
    database: process.env.DB_NAME as string,
    username: process.env.DB_USER as string,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT as unknown as number,
    dialect: process.env.DB_DRIVER as Dialect,
    password:  process.env.DB_PASSWORD ,
}

export const config = {
    dbConfig,
    reqresUrl: process.env.REQRES_URL
}