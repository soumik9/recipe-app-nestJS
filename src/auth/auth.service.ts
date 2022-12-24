import { Injectable } from '@nestjs/common'
import { User, UserDocument } from '../schemas/user.schema'
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';
import { SignupUserDTO } from './dto/signup-user.dto';

@Injectable({})
export class AuthService {

    constructor(
        @InjectModel('User') private readonly userModel: Model<UserDocument>
    ){}

    login(){
        return 'Hello signin';
    }

    async signup(doc: SignupUserDTO){
        try{
            const newUser = new this.userModel(doc)
            const result = await newUser.save()
            return {data: result, success: true, message: "User created successfully!"};
        }catch(error){
            return { success: false, message: error.message};
        }
    }
}