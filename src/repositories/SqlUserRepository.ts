import { injectable } from "inversify";
import { User } from "../models/User";
import { UserModel } from "../models/sequelize/UserModel";
import { IUserRepository } from "./interfaces/IUserRepository";




@injectable()
export class SqlUserRepository implements IUserRepository{

    async addUser(item: User): Promise<User> {
        const {name, age} = item;
        const user = await UserModel.create({name, age});
        return user;
    }
    async getAllUsers(): Promise<User[]> {
        const users = await UserModel.findAll();
        return users as User[];
    }
    async getOneUser(_id: string): Promise<User> {
        const user = await UserModel.findOne({where: { id: _id } });
        return user as User;
    }
    async editUser(_id: string, item: User): Promise<void> {
        await UserModel.update(item, {where: { id: _id } });
    }
    async deleteUser(_id: string): Promise<void> {
        await UserModel.destroy({where: { id: _id } })
    }
    
}