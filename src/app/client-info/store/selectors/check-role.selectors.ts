import { createSelector } from "@ngrx/store";
import { ClientInfoState } from "../reducers";
import { selectClientCredentialsState } from "./client-credentials.selector";

export const checkRoleSelector = createSelector(
    selectClientCredentialsState,
    (state: ClientInfoState) => state.checkRole.checkRole
)

