import { createReducer, on } from "@ngrx/store";
import { CheckPolicyDetailsSuccess } from "../actions/policy-details.action";

export interface PolicyInfoDetailsState { 
    GetPolicyDetails : any;
}

export const initialPolicyDetailsState: PolicyInfoDetailsState = {
    GetPolicyDetails: null,
}

const _PolicyDetailsStateReducer = createReducer(
    initialPolicyDetailsState,
    on(CheckPolicyDetailsSuccess, (state, action) => {
        return {
            ...state,
            GetPolicyDetails: action.GetPolicyDetails
        }
    }),
)

export function PolicyDetailsStateReducer(state: any, action: any) {
    return _PolicyDetailsStateReducer(state, action);
}