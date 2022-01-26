import { Sequelize } from "sequelize";
import dotenv from "dotenv";


dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, 
    process.env.DB_PASSWORD,{
    host: process.env.DB_HOST,
    dialect: 'mssql'
 });

export default sequelize;

export async function checkConnection(): Promise<boolean>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        return true;
      } catch (error) {
        console.error('Unable to connect to the database:', error);
        return false;
      }
}