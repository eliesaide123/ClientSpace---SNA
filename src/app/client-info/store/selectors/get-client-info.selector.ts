import { createSelector } from "@ngrx/store";
import { selectClientCredentialsState } from "./client-credentials.selector";
import { ClientInfoState } from "../reducers";

export const clientInfoSelector = createSelector(
    selectClientCredentialsState,
    (state: ClientInfoState) => state.getClientInfo
)