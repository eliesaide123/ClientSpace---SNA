import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PolicyDetailsState } from "../reducers";

export const selectClientPoliciesSelector = createFeatureSelector<PolicyDetailsState>("Client-Policies");

export const ClientPoliciesSelector = createSelector(
    selectClientPoliciesSelector,
    (state : PolicyDetailsState) => state.ClientPolicy?.clientPolicies?.polcom
)