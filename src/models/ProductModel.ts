import { Model, DataTypes, ModelStatic } from "sequelize";
import sequelize from "../utils/sqlConnection";


export interface Product extends Model {
    id: number,
    name: string,
    quantity: number,
}


export const ProductModel = <ModelStatic<Product>>sequelize.define('Product', {
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
    quantity:{
        type: DataTypes.INTEGER,
        allowNull: false,
    }
})