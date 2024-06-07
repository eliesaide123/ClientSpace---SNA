import { UserCredentials } from "./UserCredentials";

export interface AuthResponse{
    credentials: UserCredentials,
    errors: object
}