import { ActionReducerMap, createFeatureSelector, createSelector } from "@ngrx/store";
import { LoadClientCredentialsFromIndexedDBReducer, LoadClientCredentialsFromIndexedDBState } from "./load-client-credentials-indexedDB.reducer";
import { CheckRoleState, CheckRolesReducer } from "./client-policies.reducer";

export interface PoliciesState{
    clientCredentials: LoadClientCredentialsFromIndexedDBState,
    checkRole: CheckRoleState
}

export const getPoliciesState = createFeatureSelector<PoliciesState>(
    'ClientPolicies'
)

export const getPoliciesContentState = createSelector(
    getPoliciesState,
    (state: PoliciesState) => state
);

export const PolciesManagementReducers: ActionReducerMap<PoliciesState> = {
    clientCredentials: LoadClientCredentialsFromIndexedDBReducer,
    checkRole: CheckRolesReducer
}

export * from './load-client-credentials-indexedDB.reducer';
export * from './client-policies.reducer';
