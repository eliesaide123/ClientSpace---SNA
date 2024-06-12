import { createAction, props } from "@ngrx/store";
import { getClientInfo } from "../../../shared/models/GetClientInfo";

export const getClientInfoRequest = createAction(
    "[Client Info] Get Client Info Request",
    props<{getClientInfo : getClientInfo}>()
)

export const getClientInfoSuccess = createAction(
    "[Client Info Success] Get Client Info Success",
    props<{getClientInfo : getClientInfo | null}>()
)

export const getClientInfoFailure = createAction(
    "[Client Info Failure] Get Client Info Failure",
    props<{error : any}>()
)