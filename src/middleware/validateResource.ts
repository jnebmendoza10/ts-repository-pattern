import { plainToInstance } from "class-transformer";
import { validate, ValidationError } from "class-validator";
import { Request, Response, NextFunction } from "express";
import express from "express";
import { InvalidResource } from "./error/InvalidResource";


export function validateResource(type: any, skipMissingProperties?:boolean) : express.RequestHandler{
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            validate(plainToInstance(type, req.body),{skipMissingProperties});
            (errors: ValidationError[]) => {
                if (errors.length > 0){
                    const message = errors.map((error: ValidationError) => Object.values(error.constraints)).join(', ');
                    next(new InvalidResource(message))
            }
        }
            
        } catch (error) {
            next(error)
        }
        
    }
}