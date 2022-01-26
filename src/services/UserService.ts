import { SqlUserRepository } from "../repository/SqlUserRepository";
import { UserRepository } from "../repository/interfaces/UserRepository";
import { User } from "../models/UserModel";


 class UserService {

    private readonly _user : UserRepository;

    constructor(){
      this._user = new SqlUserRepository();
    }

    create (item: User){
        this._user.create(item);
     }
 
    update(id: string, item: User){
        this._user.update(id, item);
     }
 
    delete(id: string){
        this._user.delete(id);
     }
 
    find(){
        return this._user.find();
     }
 
    findOne(id: string){
        return this._user.findOne(id);
     }

     getAllMinorAge(){
        return this._user.getAllMinorAge();
     }


}

export default new UserService();