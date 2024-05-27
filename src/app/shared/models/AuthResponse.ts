import { UserCredentials } from "./UserCredentials";

export interface AuthResponse{
    user: UserCredentials,
    oServerResponse: object
}