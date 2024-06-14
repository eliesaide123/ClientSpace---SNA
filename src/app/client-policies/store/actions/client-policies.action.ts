import { createAction, props } from "@ngrx/store";
import { GetPortfolio } from "../../../shared/models/GetPortfolio";

export const ClientPoliciesRequest = createAction(
    "[Client Policy Request] Client Policies",
    props<{clientPolicies: GetPortfolio}>()
)

export const ClientPoliciesSuccess = createAction(
    "[Client Policy Success] Client Policies Success" 
    // props<{clientPolicies: getClientInfo}>()
)

export const ClientPoliciesFailure = createAction(
    "[Client Policy Failure] Client Policies Failure" ,
    props<{error: any}>()
)