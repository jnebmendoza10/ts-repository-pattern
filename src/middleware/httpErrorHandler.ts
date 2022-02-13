import { Request, Response, NextFunction } from "express"
import { InvalidRequestError } from "./errors/InvalidRequestError"
import { InvalidResourceError } from "./errors/InvalidResourceError"
import { NoContentError } from "./errors/NoContentError"
import { NotFoundError } from "./errors/NotFoundError"



export function httpExceptionHandler ( error: Error, req: Request, res: Response, next:NextFunction){
   
    if(error instanceof InvalidRequestError || error instanceof InvalidResourceError){
        res.status(400).json({
            title: error.name,
            message: error.message,
        })
    }
    else if (error instanceof NotFoundError){
        res.status(404).json({
            title: error.name,
            message: error.message
        })
    }
    
    else if (error instanceof NoContentError){
        res.status(204).json({
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