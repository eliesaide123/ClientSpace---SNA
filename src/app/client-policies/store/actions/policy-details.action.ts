import { createAction, props } from "@ngrx/store"
import { GetPolicyDetails } from "../../../shared/models/getPolicyDetails"
import { PolicyDetails } from "../../../shared/models/PolicyDetails"

export const PolicyDetailsRequest = createAction(
    "[Policy Details Request] Policy Details Request",
    props<{policyDetails: GetPolicyDetails}>()
)

export const PolicyDetailsSuccess = createAction(
    "[Policy Details Success] Policy Details Success",
    props<{policyDetails: PolicyDetails}>()
)

export const PolicyDetailsFailure = createAction(
    "[Policy Details Failure] Policy Details Failure",
    props<{error: any}>()
)