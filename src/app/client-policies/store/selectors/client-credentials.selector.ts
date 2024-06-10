import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ClientCredentialsState } from "../reducers";

debugger
export const selectClientCredentialsState = createFeatureSelector<ClientCredentialsState>("clientCredentials");

export const clientCredentialsSelector = createSelector(    
    selectClientCredentialsState,
    clientCredentials => clientCredentials.clientCredentials
)