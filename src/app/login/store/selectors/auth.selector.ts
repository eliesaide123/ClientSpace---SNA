import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "../reducers/auth.reducer";

export const selectAuthState = createFeatureSelector<AuthState>("auth");

export const authSelector = createSelector(    
    selectAuthState,
    auth => auth.AuthResponse?.isAuthenticated
)