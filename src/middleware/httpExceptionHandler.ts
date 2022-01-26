
import {Request, Response, NextFunction, response} from "express";
import { NotContentError } from "./error/NoContentError";
import { NotFoundError } from "./error/NotFoundError";
import { InvalidResource } from "./error/InvalidResource";

export function httpExceptionHandler ( error: Error, req: Request, res: Response, next:NextFunction){
   
    if(error instanceof InvalidResource){
        response.status(400).json({
            title: error.name,
            message: error.message,
        })
    }
    else if (error instanceof NotFoundError){
        response.status(404).json({
            title: error.name,
            message: error.message,
        })
    }
    
    else if (error instanceof NotContentError){
        response.status(204).json({
            title: error.name,
            message: error.message
        })
    }

    else
        res.status(500).json({
            title: "Internal Server Error",
            message: "Something went wrong"
        })
}