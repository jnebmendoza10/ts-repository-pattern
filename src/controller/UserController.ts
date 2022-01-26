import userService from "../services/UserService";
import { Request, Response, NextFunction } from "express";
import { NotFoundError } from "../middleware/error/NotFoundError";
import { NotContentError } from "../middleware/error/NoContentError";


class UserController{

    create(req: Request, res: Response, next: NextFunction){
        try {
           userService.create(req.body);

           return res.status(200);

        } catch (error) {
            next(error);
        }
    }

    update(req: Request, res: Response, next: NextFunction){
        try {
            if(req.params?.id){
                next(new NotFoundError());
            }
            
            const id = req.params.id;

            userService.update(id, req.body)

            return res.status(200);

        } catch (error) {
            next(error)
        }

    }

    delete(req: Request, res: Response, next:NextFunction){
        try {
            if(req.params?.id){
                next(new NotFoundError());
            }

            const {id} = req.params;

            userService.delete(id);

            return res.status(200);

            
        } catch (error) {
            next(error)
        }
    }

    find(req: Request, res: Response, next: NextFunction){
        try {
            const users = userService.find();

            return res.status(200).json(users);
           
            
        } catch (error) {
            next(error)
        }

    }

    findONe(req: Request, res: Response, next: NextFunction){
        try {
            if(req.params?.id){
                next(new NotFoundError());
            }

            const id = req.params.id;
            const user = userService.findOne(id);

            return user 
            ? res.status(200).json(user)
            : next(new NotFoundError())

        } catch (error) {
            next(error)
        }
    }

    getAllMinors(req: Request, res: Response, next: NextFunction){
        try {
            const userMinor = userService.getAllMinorAge();

            return userMinor != null
            ? res.status(200).json(userMinor)
            : next(new NotContentError())
        } catch (error) {
            next(error)
        }
    }

}


export default new UserController();