import { createAction, props } from "@ngrx/store";
import { GetPortfolio } from "../../../shared/models/GetPortfolio";
import { ClientInfo } from "../../../shared/models/clientInfo";

export const getClientInfoRequest = createAction(
    "[Client Info] Get Client Info Request",
    props<{getClientInfo : GetPortfolio}>()
)

export const getClientInfoSuccess = createAction(
    "[Client Info Success] Get Client Info Success",
    props<{getClientInfo : ClientInfo | null}>()
)

export const getClientInfoFailure = createAction(
    "[Client Info Failure] Get Client Info Failure",
    props<{error : any}>()
)