import { ActionReducerMap, createFeatureSelector, createSelector } from "@ngrx/store";
import { LoadClientCredentialsFromIndexedDBReducer, LoadClientCredentialsFromIndexedDBState } from "./load-client-credentials-indexedDB.reducer";
import { CheckRoleState, CheckRolesReducer } from "./checkRole.reducer";
import { getClientInfoReducer, getClientInfoState } from "./get-client-info.reducer";


export interface ClientInfoState{
    clientCredentials: LoadClientCredentialsFromIndexedDBState,
    checkRole: CheckRoleState,
    getClientInfo: getClientInfoState
}

export const getPoliciesState = createFeatureSelector<ClientInfoState>(
    'ClientInfo'
)

export const getPoliciesContentState = createSelector(
    getPoliciesState,
    (state: ClientInfoState) => state
);

export const PolciesManagementReducers: ActionReducerMap<ClientInfoState> = {
    clientCredentials: LoadClientCredentialsFromIndexedDBReducer,
    checkRole: CheckRolesReducer,
    getClientInfo : getClientInfoReducer
}

export * from './load-client-credentials-indexedDB.reducer';
export * from './checkRole.reducer';
export * from './get-client-info.reducer';
