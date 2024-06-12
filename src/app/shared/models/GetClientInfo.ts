import { UserCredentials } from "./UserCredentials";

export interface getClientInfo{
     credentials : UserCredentials,
     roleId: string,
     gridSize: number,
     startIndex: number,
     direction: string
}