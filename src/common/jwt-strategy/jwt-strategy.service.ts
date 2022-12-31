import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from '@src/auth/auth.service';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtConstants } from '../constants/jwt.constant';

@Injectable()
export class JwtStrategyService extends PassportStrategy(Strategy) {

    constructor(
        private authService: AuthService
    ){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtConstants.secret,
        })
    }

    async validate(payload: any) {
        console.log(payload);
        const isValidated = await this.authService.validateUserById(payload._id);

        if(isValidated){
            return { userId: payload._id, email: payload.email }
        }else{
            throw new UnauthorizedException('Unauthorized access!')
        }
        // return { userId: payload.sub, username: payload.username };
      }
}
