import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsNotEmpty } from "class-validator";
import { Document } from "mongoose";

export type UserDocument = User & Document

@Schema()
export class User {

    @Prop({ required: [true, 'Name field is required'] })
    @IsNotEmpty()
    name: string;

    @Prop({ required: [true, 'Email field is required'] })
    email: string;

    @Prop({ required: true })
    password: string;
 
    @Prop({ required: true })
    confirmPassword: string;

    @Prop({ default: Date.now })
    date: Date;

}

export const UserSchema = SchemaFactory.createForClass(User);