import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PolicyInfoState } from "../reducers";

export const getPolcomFromClientPolicies = createFeatureSelector<PolicyInfoState>("PolicyInfo");

export const getPolcomFromClientPoliciesSelector = createSelector(
    getPolcomFromClientPolicies,
    (state : PolicyInfoState) => state.ClientPolicies.ClientPolicies?.polcom
)