import { UserCredentials } from "./UserCredentials";

export interface getClientPolicies{
     credentials : UserCredentials,
     roleId: string,
     gridSize: number,
     startIndex: number,
     direction: string
}