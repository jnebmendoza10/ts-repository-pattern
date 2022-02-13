import { UserModel } from "../../src/models/sequelize/UserModel";
import { User } from "../../src/models/User";
import { SqlUserRepository } from "../../src/repositories/SqlUserRepository";


let users : Array<User> = [{id: 1, name: "Benj", age: 23}, {id: 2, name: "Lebron", age: 24}];

describe('SqlUserRepository', () => {

    let sqlUserRepository: SqlUserRepository;

    beforeEach(() => {
        sqlUserRepository = new SqlUserRepository();
    });


    it('should successfully add the user to the SQL database, and return the created user', async () => {
        UserModel.create = jest.fn().mockResolvedValue(users[0]);
        let name = "Benj";
        let age = 23;

        expect(await sqlUserRepository.addUser(users[0])).toEqual(users[0]);
        expect(UserModel.create).toBeCalledTimes(1);
        expect(UserModel.create).toBeCalledWith({ name, age });

    });

    it('should successfully retrieve all the users from the SQL database', async () => {
        UserModel.findAll = jest.fn().mockResolvedValue(users);

        expect(await sqlUserRepository.getAllUsers()).toEqual(users);
        expect(UserModel.findAll).toBeCalledTimes(1);
    });

    it('should successfully retrieve a user from the SQL database based on the given id', async () => {
        let _id = '1';
        UserModel.findOne = jest.fn().mockResolvedValue(users[0]);

        expect(await sqlUserRepository.getOneUser(_id)).toEqual(users[0]);
        expect(UserModel.findOne).toBeCalledTimes(1);
        expect(UserModel.findOne).toBeCalledWith({ where:{ id: _id } });
    });

    it('should successfully edit a user from the SQL database based on the given id', async () => {
        let _id = '1';
        UserModel.update = jest.fn();
        await sqlUserRepository.editUser(_id, users[0]);

        expect(UserModel.update).toBeCalledTimes(1);
        expect(UserModel.update).toBeCalledWith(users[0], { where:{ id: _id } });
    });

    it('should successfully delete a user from the SQL database based on the given id', async () => {
        let _id = '1';
        UserModel.destroy = jest.fn();
        await sqlUserRepository.deleteUser(_id);

        expect(UserModel.destroy).toBeCalledTimes(1);
        expect(UserModel.destroy).toBeCalledWith({ where:{ id: _id } });
    });


});
