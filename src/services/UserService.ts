import { IUserRepository } from "../repositories/interfaces/IUserRepository";
import { User } from "../models/User";
import { inject, injectable } from "inversify";
import { types } from "../di-config/types";


@injectable()
export class UserService {

    constructor( @inject(types.UserRepository) private readonly userRepository: IUserRepository){}

    async addUser(item: User): Promise<User> {
      const user = await this.userRepository.addUser(item);
      return user
    }
    async getAllUsers(): Promise<User[]> {
      const users = await this.userRepository.getAllUsers();
      return users;
    }
    async getOneUser(_id: string): Promise<User> {
      const user = await this.userRepository.getOneUser(_id);
      return user;
    }
    async editUser(_id: string, item: User): Promise<void> {
      await this.userRepository.editUser(_id, item);
    }
    async deleteUser(_id: string): Promise<void> {
      await this.userRepository.deleteUser(_id);
    }
    
}