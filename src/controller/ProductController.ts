import productService from "../services/ProductService";
import { Request, Response, NextFunction } from "express";
import { NotFoundError } from "../middleware/error/NotFoundError";
import { NotContentError } from "../middleware/error/NoContentError";

class ProductController{
    create(req: Request, res: Response, next: NextFunction){
        try {
           productService.create(req.body);

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
            
            const {id} = req.params;

            productService.update(id, req.body)

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

            productService.delete(id);

            return res.status(200);

            
        } catch (error) {
            next(error)
        }
    }

    find(req: Request, res: Response, next: NextFunction){
        try {
            const users = productService.find();

            return users != null
            ? res.status(200).json(users)
            : next(new NotContentError());
            
        } catch (error) {
            next(error)
        }

    }

    findONe(req: Request, res: Response, next: NextFunction){
        try {
            if(req.params?.id){
                next(new NotFoundError());
            }

            const {id} = req.params;
            const user = productService.findOne(id);

            return user != null
            ? res.status(200).json(user)
            : next(new NotFoundError())

        } catch (error) {
            next(error)
        }
    }

    getTotal(req: Request, res: Response, next: NextFunction){
        try {
            if(req.params?.name){
                next(new NotFoundError());
            }
            const {productName} = req.params;
            const total = productService.getTotal(productName);

            return res.status(200).json(total);

        } catch (error) {
            next(error);
        }

    }

}


export default new ProductController();