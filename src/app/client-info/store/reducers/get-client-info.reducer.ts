import { createReducer, on } from "@ngrx/store";
import { getClientInfo } from "../../../shared/models/GetClientInfo";
import { GetClientInfoActions } from '../actions'

export interface getClientInfoState {
    getClientInfo: getClientInfo | null
}

export const getClientInfoInitialState: getClientInfoState = {
    getClientInfo: null
}

export const getClientInfoReducer = createReducer(
    getClientInfoInitialState,
    on(GetClientInfoActions.getClientInfoSuccess, (state, action) => {
        return {
            ...state,
            getClientInfo: action.getClientInfo
        }
    })
)