import { NextFunction, Request, Response } from "express";
import { inject, injectable } from "inversify";
import { InvalidRequestError } from "../middleware/errors/InvalidRequestError";
import { NoContentError } from "../middleware/errors/NoContentError";
import { NotFoundError } from "../middleware/errors/NotFoundError";
import { UserService } from "../services/UserService";
import { userSchema } from "../models/schema/userSchema";
import { InvalidResourceError } from "../middleware/errors/InvalidResourceError";


@injectable()
export class UserController {
    constructor(@inject(UserService) private readonly userService : UserService){}

    addUser = async (req: Request, res:Response, next: NextFunction) => {
      try {
        
        const result = await userSchema.validateAsync(req.body);
        const user = await this.userService.addUser(result);
        return res.status(201).json(user);

      } catch (error) {
        if(error.isJoi == true){
          next(new InvalidResourceError(error.message))
        }
        next(error)
      }
        
    }

    getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
      try {
        const users = await this.userService.getAllUsers();

        return users.length > 0 
        ? res.status(200).json(users)
        : next(new NoContentError());
      } catch (error) {
        next(error)
      }
        
    }

    getOneUser = async (req: Request, res: Response, next: NextFunction) => {
      try {
       
        const { userId } = req.params;
        if (userId === undefined){
          next(new InvalidRequestError());
        }
        const user = await this.userService.getOneUser(userId);

        return user
        ? res.status(200).json(user)
        : next(new NotFoundError());
      } catch (error) {
        next(error)
      }
    }

    editUser = async (req: Request, res: Response, next: NextFunction) => {
      try {

        const { userId } = req.params;
        if (userId === undefined){
          next(new InvalidRequestError());
        }
        const result = await userSchema.validateAsync(req.body);
        this.userService.editUser(userId, result);

        return res.status(200).send('Updated successfully');
      } catch (error) {
        
        if(error.isJoi == true){
          next(new InvalidResourceError(error.message))
        }
        next(error)
      }
    }

    deleteUser = async (req: Request, res: Response, next: NextFunction) => {
      try {
    
        const { userId } = req.params;
        if (userId === undefined){
          next(new InvalidRequestError());
        }
        this.userService.deleteUser(userId);

        return res.status(200).send('Deleted Successfully')
      } catch (error) {
        next(error)
      }
    }
    


}