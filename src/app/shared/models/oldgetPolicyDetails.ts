import { UserCredentials } from "./UserCredentials";

export interface GetPolicyDetails{
    credentials : UserCredentials,
    roleID : string,
    polserno : string;
}