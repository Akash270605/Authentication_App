import type User from "./User";

export default interface LoginResponseData {
    accessToken: string;
    userDto: User;
    refeshToken: string;
    expiresIn: number;
};