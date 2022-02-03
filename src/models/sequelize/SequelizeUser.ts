import { Model } from "sequelize/dist";
import { User } from "../User";


export interface SequelizeUser extends User, Model{}