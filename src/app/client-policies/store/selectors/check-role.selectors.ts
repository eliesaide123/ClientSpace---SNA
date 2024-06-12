import { createSelector } from "@ngrx/store";
import { PoliciesState } from "../reducers";
import { selectClientCredentialsState } from "./client-credentials.selector";

export const checkRoleSelector = createSelector(
    selectClientCredentialsState,
    (state: PoliciesState) => state.checkRole.checkRole
)

