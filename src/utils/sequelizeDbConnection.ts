import { ConnectionError, ConnectionTimedOutError, Sequelize, TimeoutError } from "sequelize";
import dotenv from "dotenv";


dotenv.config();


const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, 
    process.env.DB_PASSWORD,{
    host: process.env.DB_HOST,
    dialect: 'mssql',
    retry: {
        match: [
            ConnectionError,
            ConnectionTimedOutError,
            TimeoutError
        ],
        max: 3,
    }
 });


 export default sequelize;