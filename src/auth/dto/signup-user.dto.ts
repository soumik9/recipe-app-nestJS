import { IsNotEmpty, IsString } from "class-validator";

export class SignupUserDTO{

    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @IsNotEmpty()
    @IsString()
    readonly email: string;

    @IsNotEmpty()
    @IsString()
    readonly password: string;

    @IsNotEmpty()
    @IsString()
    readonly confirmPassword: string;

    readonly date: any;
}