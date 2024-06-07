import { ActionReducerMap, createFeatureSelector, createSelector } from "@ngrx/store";
import { ClientCredentialsReducer, ClientCredentialsState } from "./client-credentials.reducer";

export interface PoliciesState{
    clientCredentials: ClientCredentialsState
}

export const getPoliciesState = createFeatureSelector<PoliciesState>(
    'ClientPolicies'
)

export const getPoliciesContentState = createSelector(
    getPoliciesState,
    (state: PoliciesState) => state
);

export const PolciesManagementReducers: ActionReducerMap<PoliciesState> = {
    clientCredentials: ClientCredentialsReducer
}

// export * from './client-policies.reducer';
export * from './client-credentials.reducer';