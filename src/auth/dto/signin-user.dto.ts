import { IsNotEmpty, IsString } from "class-validator";

export class SigninUserDTO{
    @IsNotEmpty()
    @IsString()
    readonly email: string;

    @IsNotEmpty()
    @IsString()
    readonly password: string;
}