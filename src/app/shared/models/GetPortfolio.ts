import { UserCredentials } from "./UserCredentials";

export interface GetPortfolio{
     credentials : UserCredentials,
     roleId: string,
     gridSize: number,
     startIndex: number,
     direction: string
}