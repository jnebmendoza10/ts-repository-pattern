import { Container } from "inversify";
import { types } from "./types";
import { IUserRepository } from "../repositories/interfaces/IUserRepository";
//import { MockUserRepository } from "../repositories/MockUserRepository";
import { SqlUserRepository } from "../repositories/SqlUserRepository";

import { UserService } from "../services/UserService";

const myContainer = new Container();

myContainer.bind<IUserRepository>(types.UserRepository).to(SqlUserRepository);
myContainer.bind<UserService>(UserService).toSelf();

export { myContainer }