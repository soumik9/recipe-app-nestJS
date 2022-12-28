import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupUserDTO } from './dto/signup-user.dto';
import { SignupUser } from './interfaces/signup-user.interface';

// dto helps to which data should come from over network and which type 
// and schema validation helps when sending request to save the data

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('signup')
    async signup(@Body() user: SignupUserDTO): Promise<SignupUser> {
        // return user;
        return await this.authService.signup(user);
    }

    @Post('signin')
    signin() {
        return this.authService.login();
    }

}