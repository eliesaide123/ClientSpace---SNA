import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PoliciesState } from "../reducers";

export const selectClientCredentialsState = createFeatureSelector<PoliciesState>("clientCredentials");

export const clientCredentialsSelector = createSelector(    
    selectClientCredentialsState,    
    (state: PoliciesState) => state.clientCredentials.clientCredentials
)