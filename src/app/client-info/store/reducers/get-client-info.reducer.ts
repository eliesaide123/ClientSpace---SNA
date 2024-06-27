import { createReducer, on } from "@ngrx/store";
import { GetClientInfoActions } from '../actions'
import { ClientInfo } from "../../../shared/models/clientInfo";
import {logout} from '../actions/logout.action'

export interface getClientInfoState {
    getClientInfo: ClientInfo | null
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
    }),    
)