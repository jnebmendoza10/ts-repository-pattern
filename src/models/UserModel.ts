import { Model, DataTypes, ModelStatic } from "sequelize";
import sequelize from "../utils/sqlConnection";



export interface User extends Model {
    id: number,
    name: string,
    age: number,
}



export const UserModel = <ModelStatic<User>>sequelize.define('User', {
    id:{
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    age:{
        type: DataTypes.INTEGER,
        allowNull: false,
    }
})