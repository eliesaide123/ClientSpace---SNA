import { createAction, props } from "@ngrx/store"
import { GetPolicyDetails } from "../../../shared/models/oldgetPolicyDetails"
import { PolicyDetails } from "../../../shared/models/PolicyDetails"
import { GetPolicyDetailsInteface } from "../../../shared/models/GetPolicyDetails"

export const PolicyDetailsRequest = createAction(
    "[Policy Details Request] Policy Details Request",
    props<{policyDetails: GetPolicyDetails}>()
)

export const PolicyDetailsSuccess = createAction(
    "[Policy Details Success] Policy Details Success",
    props<{policyDetails: GetPolicyDetailsInteface}>()
)

export const PolicyDetailsFailure = createAction(
    "[Policy Details Failure] Policy Details Failure",
    props<{error: any}>()
)