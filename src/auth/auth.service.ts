import { Injectable, UnauthorizedException } from '@nestjs/common'
import { User, UserDocument } from './schema/user.schema'
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';
import { SignupUserDTO } from './dto/signup-user.dto';
import { PasswordHasherService } from '@src/common/password-hasher.service';
import { SigninUserDTO } from './dto/signin-user.dto';
import { JwtService } from '@nestjs/jwt'

@Injectable({})
export class AuthService {

    constructor(
        @InjectModel('User')
        private readonly userModel: Model<UserDocument>,
        private passwordHasherService: PasswordHasherService,
        private jwtService: JwtService,
    ) { }

    async signup(doc: SignupUserDTO) {
        try {
            const findUser = await this.userModel.findOne({ email: doc.email });

            // checking is user already exists
            if (findUser) {
                throw new UnauthorizedException('Email already exists!')
            }

            // encryting password
            const encryptedPassword = await this.passwordHasherService.hashPassword(doc.password);

            const newUser = new this.userModel({ ...doc, password: encryptedPassword, confirmPassword: undefined })
            const result = await newUser.save();

            result.password === undefined;


            // removing password and confirm password
            // const {confirmPassword, password, ...sendData.data._doc} = result;

            // console.log(sendData);

            return { data: result, success: true, message: "User created successfully!" };
        } catch (error) {
            return { errror: error.message, success: false, message: `Server error!` };
        }
    }

    async login(doc: SigninUserDTO) {

        try {
            const findUser = await this.userModel.findOne({ email: doc.email });

            // checking is user already exists
            if (!findUser) { throw new UnauthorizedException('User never exists!'); }

            // verify password
            const matchedPassword = await this.passwordHasherService.comparePassword(doc.password, findUser.password);

            if (!matchedPassword) { throw new UnauthorizedException('Invalid information!') }

            // token
            const token = await this.jwtService.signAsync({
                _id: findUser._id, email: findUser.email
            }, { expiresIn: '60s' })

            return { token, success: true, message: "User created successfully!" };

        } catch (error) {
            return { errror: error.message, success: false, message: `Server error!` };
        }
    }

    async validateUserById(userId: string): Promise<boolean>{
        const user = await this.userModel.findById(userId);
        if(user){
            return true;
        }else{
            return false
        }
    }
}