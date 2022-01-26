import { IsString, IsInt } from "class-validator";



export class ProductDto{

    @IsString()
    public name: string;

    @IsInt()
    public quantity: number;
}