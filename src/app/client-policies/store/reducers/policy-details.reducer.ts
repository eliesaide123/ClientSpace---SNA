import { createReducer, on } from "@ngrx/store";
import { PolicyDetails } from "../../../shared/models/PolicyDetails";
import { PolicyDetailsSuccess } from "../actions/policy-details.action";
import { GetPolicyDetailsInteface } from "../../../shared/models/GetPolicyDetails";

export interface PolicyDetailsRed{
    policyDetails : GetPolicyDetailsInteface | null
};

export const initialPolicyDetails : PolicyDetailsRed = {
    policyDetails : null
};

export const PolicyDetailsReducer = createReducer(
    initialPolicyDetails,
    on(PolicyDetailsSuccess, (state, action) => {
        return{
            ...state,
            policyDetails : action.policyDetails
        }
    })
)