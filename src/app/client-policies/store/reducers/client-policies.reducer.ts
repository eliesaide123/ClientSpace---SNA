import { createReducer, on } from "@ngrx/store";
import { ClientPoliciesSuccess } from "../actions/client-policies.action";
import { GetPortfolio } from "../../../shared/models/GetPortfolio";
import { GetClientInfo } from "../../../shared/models/GetClientInfo";

export const reducerFeatureKey = "ClientPolicies";

export interface ClientPolicies {
    clientPolicies : GetClientInfo | null
}

export const initialClientPolicies : ClientPolicies = {
    clientPolicies : null
};

export const ClientPoliciesReducer = createReducer(  
    initialClientPolicies,
    on(ClientPoliciesSuccess, (state, action) => {
      return{      
        ...state,      
        clientPolicies: action.clientPolicies
      }
    })
  );