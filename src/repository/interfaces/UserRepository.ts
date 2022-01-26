import { User } from "../../models/UserModel";
import { BaseRepository } from "./BaseRepository";


export interface UserRepository extends BaseRepository<User> {
   getAllMinorAge(): Promise<User[]>
}