import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { PolicyInfoDetailsState, PolicyDetailsStateReducer } from './policy-details.reducer';
import { CheckPolicyInfoState, CheckPolicyInfoStateReducer } from './policy-info.reducer';

export interface PolicyInfoState{
    PolicyDetails : PolicyInfoDetailsState,
    ClientPolicies : CheckPolicyInfoState
}

export const getPolicyInfo = createFeatureSelector<PolicyInfoState>(
    'ClientPolicies'
)

export const getPoliciesDetailsState = createSelector(
    getPolicyInfo,
    (state: PolicyInfoState) => state
);

export const PolciesInfoManagementReducers: ActionReducerMap<PolicyInfoState> = {
    PolicyDetails : PolicyDetailsStateReducer,
    ClientPolicies : CheckPolicyInfoStateReducer
}

export * from './policy-details.reducer'
export * from './policy-info.reducer'