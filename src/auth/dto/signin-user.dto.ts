import { IsNotEmpty, IsString } from "class-validator";

export class SigninUserDTO{
    @IsNotEmpty()
    @IsString()
    readonly email: string;

    @IsNotEmpty()
    @IsString()
    readonly password: string;
}

export class SigninUser{
    @IsNotEmpty()
    readonly token: string;
}