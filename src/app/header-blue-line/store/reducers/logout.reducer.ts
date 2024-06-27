import { createReducer, on } from "@ngrx/store"
import { logoutActionSuccess } from "../actions/logout.actions"
import { AuthResponse } from "../../../shared/models/AuthResponse"

export const reducerKey = 'Logout'

export interface LogoutState {
    AuthResponse: AuthResponse | null
}

export const InitialLogoutState : LogoutState = {
    AuthResponse : null
}

export const LogoutReducer = createReducer(
    InitialLogoutState,
    on(logoutActionSuccess, () => InitialLogoutState),    
)