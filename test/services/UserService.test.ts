import { User } from "../../src/models/User";
import { IUserRepository } from "../../src/repositories/interfaces/IUserRepository";
import { UserService } from "../../src/services/UserService";

let users : Array<User> = [{id: 1, name: "Benj", age: 23}, {id: 2, name: "Lebron", age: 24}];

const userRepository: IUserRepository ={
    addUser: jest.fn().mockResolvedValue(users[0]),

    getAllUsers: jest.fn().mockResolvedValue(users),
     
    getOneUser: jest.fn().mockResolvedValue(users[0]),

    editUser: jest.fn(),

    deleteUser: jest.fn()
}

describe('UserService', () => {

    let userService : UserService;

    beforeEach(() => {
        userService = new UserService(userRepository);
    });
   

    it('should successfully create a user and return the created user', async() => {
        expect(await userService.addUser(users[0])).toEqual(users[0]);
        expect(userRepository.addUser).toBeCalledTimes(1);
        expect(userRepository.addUser).toBeCalledWith(users[0]);
    })

  
    it('should return all the users from the database', async () => {
       
        expect(await userService.getAllUsers()).toEqual(users);
        expect(userRepository.getAllUsers).toBeCalledTimes(1);
        
    });

    it('should return a user based on the given id', async () => {
        let _id = '1';
        expect(await userService.getOneUser(_id)).toEqual(users[0]);
        
        expect(userRepository.getOneUser).toBeCalledTimes(1);
        expect(userRepository.getOneUser).toBeCalledWith(_id);
    })

    it('should successfully edit a user based on the given id', async () => {
        let _id = '1';
        await userService.editUser(_id, users[0])

        expect(userRepository.editUser).toBeCalledTimes(1);
        expect(userRepository.editUser).toBeCalledWith(_id, users[0]);
    })

    it('should successfully delete a user based on the given id', async () => {
        let _id = '1';
        await userService.deleteUser(_id);

        expect(userRepository.deleteUser).toBeCalledTimes(1);
        expect(userRepository.deleteUser).toBeCalledWith(_id);
    })


});