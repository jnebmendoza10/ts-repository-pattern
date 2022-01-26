import { SqlBaseRepository } from "./SqlBaseRepository";
import { UserRepository } from "./interfaces/UserRepository";
import { User } from "../models/UserModel";
import { UserModel } from "../models/UserModel";

export class SqlUserRepository extends SqlBaseRepository<User> implements UserRepository{

    constructor(){
        super(UserModel)
    }
    async getAllMinorAge(): Promise<User[]> {
        const data = await UserModel.findAll({where:{age: {lt: 18}}});
        return data;
    }   
}