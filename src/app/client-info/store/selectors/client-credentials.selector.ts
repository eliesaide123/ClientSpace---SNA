import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ClientInfoState } from "../reducers";

export const selectClientCredentialsState = createFeatureSelector<ClientInfoState>("clientCredentials");

export const clientCredentialsSelector = createSelector(    
    selectClientCredentialsState,    
    (state: ClientInfoState) => state.clientCredentials.clientCredentials
)