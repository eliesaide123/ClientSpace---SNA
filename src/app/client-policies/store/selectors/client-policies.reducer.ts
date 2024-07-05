import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PolicyDetailsState } from "../reducers";
debugger
export const selectClientPoliciesSelector = createFeatureSelector<PolicyDetailsState>("ClientPolicies");

export const ClientPoliciesSelector = createSelector(
    selectClientPoliciesSelector,
    (state : PolicyDetailsState) => state.ClientPolicies?.clientPolicies?.polcom
)