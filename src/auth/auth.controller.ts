import { Controller, Post, Body } from '@nestjs/common';
import { UserDocument } from 'src/schemas/user.schema';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('signup')
    async signup(@Body() user: UserDocument) {
        return user;
        // return await this.authService.signup(user);
    }

    @Post('signin')
    signin() {
        return this.authService.login();
    }

}