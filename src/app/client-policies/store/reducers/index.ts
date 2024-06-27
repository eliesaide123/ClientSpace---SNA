import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { ClientPolicies, ClientPoliciesReducer } from './client-policies.reducer';
import { PolicyDetailsRed, PolicyDetailsReducer } from './policy-details.reducer';

export interface PolicyDetailsState{
    PolicyDetail : PolicyDetailsRed,
    ClientPolicy : ClientPolicies
}

export const getPolicyDetails = createFeatureSelector<PolicyDetailsState>(
    'Client-Policies'
)

export const getPoliciesDetailsState = createSelector(
    getPolicyDetails,
    (state: PolicyDetailsState) => state
);

export const PolciesDetailsManagementReducers: ActionReducerMap<PolicyDetailsState> = {
    PolicyDetail : PolicyDetailsReducer,
    ClientPolicy : ClientPoliciesReducer
}

export * from './client-policies.reducer'
export * from './policy-details.reducer'