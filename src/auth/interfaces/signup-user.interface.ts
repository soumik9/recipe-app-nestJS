import { ObjectId } from "mongoose";

export interface SignupUser {
    data?: {
        name: string;
        email: string;
        _id: ObjectId;
        // password: string;
    },
    message: string;
    success: boolean;
}

export interface LoginResponse {
    token?: string,
    message: string;
    success: boolean;
}

export interface SignupUserData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}
