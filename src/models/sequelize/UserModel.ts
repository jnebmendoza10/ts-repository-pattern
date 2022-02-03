import { DataTypes } from "sequelize";
import sequelize from "../../utils/sequelizeDbConnection";
import { SequelizeUser } from "./SequelizeUser";


export const UserModel = sequelize.define<SequelizeUser>('User', {
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