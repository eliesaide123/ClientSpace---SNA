import { createReducer, on } from "@ngrx/store";
import { CheckPolicyInfoSuccess } from "../actions/policy-info.action";

export interface CheckPolicyInfoState { 
    ClientPolicies : any;
}

export const initialState: CheckPolicyInfoState = {
    ClientPolicies: null,
}

const _CheckPolicyInfoStateReducer = createReducer(
    initialState,
    on(CheckPolicyInfoSuccess, (state, action) => {
        return{
            ...state,
            ClientPolicies: action.getClientInfo
        }
    }),
)

export function CheckPolicyInfoStateReducer(state: any, action: any) {
    return _CheckPolicyInfoStateReducer(state, action);
  }