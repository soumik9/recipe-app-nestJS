import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { jwtConstants } from '@src/common/constants/jwt.constant';
import { PasswordHasherService } from '@src/common/password-hasher.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { User, UserSchema } from './schema/user.schema';


@Module({
    imports: [ 
        JwtModule.register({ secret: jwtConstants.secret}),
        MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    ],
    controllers: [AuthController],
    providers: [AuthService, PasswordHasherService],
   
})
export class AuthModule {}
