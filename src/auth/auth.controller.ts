import { Controller, Post, Body, Request, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { SigninUserDTO } from './dto/signin-user.dto';
import { SignupUserDTO } from './dto/signup-user.dto';
import { LoginResponse, SignupUser } from './interfaces/signup-user.interface';

// dto helps to which data should come from over network and which type 
// and schema validation helps when sending request to save the data

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('signup')
    async signup(@Body() user: SignupUserDTO): Promise<SignupUser> {
        return await this.authService.signup(user);
    }

    @Post('signin')
    async signin(@Body() user: SigninUserDTO): Promise<LoginResponse> {
        return this.authService.login(user);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('profile')
    async profile(@Request() req) {
        return req.user;
    }

}