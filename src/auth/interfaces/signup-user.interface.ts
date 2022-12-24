export interface SignupUser {
    data?: SignupUserData,
    message: string;
    success: boolean;
}

export interface SignupUserData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}