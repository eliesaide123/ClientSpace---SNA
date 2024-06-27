import { createAction, props } from "@ngrx/store";
import { GetPortfolio } from "../../../shared/models/GetPortfolio";
import { GetClientInfo } from "../../../shared/models/GetClientInfo";

export const ClientPoliciesRequest = createAction(
    "[Client Policy Request] Client Policies Request",
    props<{clientPolicies: GetPortfolio}>()
)

export const ClientPoliciesSuccess = createAction(
    "[Client Policy Success] Client Policies Success",
    props<{clientPolicies: GetClientInfo}>()
)

export const ClientPoliciesFailure = createAction(
    "[Client Policy Failure] Client Policies Failure" ,
    props<{error: any}>()
)