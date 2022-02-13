import { User } from "../../models/User";


export interface IUserRepository {
    addUser(item: User): Promise<User>
    getAllUsers(): Promise<User[]>
    getOneUser(_id: string): Promise<User>
    editUser(_id: string, item: User): Promise<void>
    deleteUser(_id : string): Promise<void>   
}