import { createAction, props } from "@ngrx/store";
import { AuthResponse } from "../../../shared/models/AuthResponse";
import { UserCredentials } from "../../../shared/models/UserCredentials";

export const login = createAction(
    "[Login Action] Login",
    props<{credentials: UserCredentials}>()        
)

export const loginSuccess = createAction(
    '[Login Action] Login Success',
    props<{authResponse: AuthResponse}>()
)

export const loginFailure = createAction(
    '[Auth] Login Failure',
    props<{ error: any }>()
);