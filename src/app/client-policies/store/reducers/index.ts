import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { ClientPolicies, ClientPoliciesReducer } from './client-policies.reducer';
import { PolicyDetailsRed, PolicyDetailsReducer } from './policy-details.reducer';

export interface PolicyDetailsState{
    PolicyDetails : PolicyDetailsRed,
    ClientPolicies : ClientPolicies
}

export const getPolicyDetails = createFeatureSelector<PolicyDetailsState>(
    'ClientPolicies'
)

export const getPoliciesDetailsState = createSelector(
    getPolicyDetails,
    (state: PolicyDetailsState) => state
);

export const PoliciesDetailsManagementReducers: ActionReducerMap<PolicyDetailsState> = {
    PolicyDetails : PolicyDetailsReducer,
    ClientPolicies : ClientPoliciesReducer
}

export * from './client-policies.reducer'
export * from './policy-details.reducer'