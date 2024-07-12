import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PolicyInfoState } from "../reducers";

export const getPolcomForDDl = createFeatureSelector<PolicyInfoState>("PolicyInfo");

export const getPolcomForDDlSelector = createSelector(
    getPolcomForDDl,
    (state : PolicyInfoState) => state.PolicyDetails.GetPolicyDetails
)