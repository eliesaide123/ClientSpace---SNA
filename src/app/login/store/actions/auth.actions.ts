import { createAction, props } from "@ngrx/store";
import { AuthResponse } from "../../../shared/models/AuthResponse";

export const login = createAction(
    "[Login Action] User Login",
    props<{AuthResponse: AuthResponse}>()        
)