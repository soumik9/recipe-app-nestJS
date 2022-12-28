import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PasswordHasherService } from '@src/common/password-hasher.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { User, UserSchema } from './schema/user.schema';


@Module({
    imports: [ MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),],
    controllers: [AuthController],
    providers: [AuthService, PasswordHasherService],
   
})
export class AuthModule {}
