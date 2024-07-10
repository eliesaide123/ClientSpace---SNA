import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PolicyInfoState } from "../reducers";

export const selectPolicyDetailsSelector = createFeatureSelector<PolicyInfoState>("PolicyInfo");

export const ClientPoliciesSelector = createSelector(
    selectPolicyDetailsSelector,
    (state : PolicyInfoState) => state.PolicyDetails.GetPolicyDetails
)