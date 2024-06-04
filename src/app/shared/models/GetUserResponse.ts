import { UserCredentials } from "./UserCredentials";

export interface GetUserResponse{
    userAccount: UserCredentials,
    questions: string[]
}