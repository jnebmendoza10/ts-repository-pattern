import { injectable } from "inversify";
import { User } from "../models/User";
import { IUserRepository } from "./interfaces/IUserRepository";


@injectable()
export class MockUserRepository implements IUserRepository{

    private readonly users: User[] = [
        { id: 1, name: 'Emily', age: 32 },
        { id: 2, name: 'John', age: 69 },
        { id: 3, name: 'Jane', age: 102 },
      ];

    async getAllUsers(): Promise<User[]> {
        return this.users;
    }
    
    async addUser(item: User): Promise<User> {
       this.users.push({id: 4, name: 'Benj', age: 69})
       return;
    }
    async getOneUser(id: string): Promise<User> {
        return this.users[parseInt(id) - 1];
    }
    editUser(id: string, item: User ): Promise<void> {
       const index = this.users.findIndex(obj => obj.id === parseInt(id));
       this.users[index].name = item.name;
       this.users[index].age = item.age;
       return;
    }
    async deleteUser(id: string): Promise<void> {
        this.users.splice(parseInt(id)- 1);
    }
   
}