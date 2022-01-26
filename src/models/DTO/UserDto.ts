import { IsString, IsInt } from "class-validator";


export class UserDto{
    @IsString()
    public name: string;

    @IsInt()
    public age: number;
}

