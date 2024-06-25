import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ClientPolicies } from "../reducers/client-policies.reducer";

export const selectClientPoliciesSelector = createFeatureSelector<ClientPolicies>("ClientPolicies")

export const ClientPoliciesSelector = createSelector(
    selectClientPoliciesSelector,
    (state) => state.clientPolicies?.polcom
)