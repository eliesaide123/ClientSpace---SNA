import { createReducer, on } from "@ngrx/store";
import { CheckRoleSuccess } from "../actions/getRole.action";

export interface CheckRoleState { 
    clientCredentials : any;
}

export const initialState: CheckRoleState = {
    clientCredentials: null,
}

const _checkRoleReducer = createReducer(
    initialState,
    on(CheckRoleSuccess, (state, action) => {
        return{
            ...state,
            clientCredentials: action.checkRole
        }
    }),
)

export function checkRoleReducer(state: any, action: any) {
    return _checkRoleReducer(state, action);
  }