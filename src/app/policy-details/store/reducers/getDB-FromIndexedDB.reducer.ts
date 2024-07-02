import { createReducer, on } from "@ngrx/store";
import { checkRolesResponse } from "../../../shared/models/checkRolesResponse";
import { GetClientRoleFromIndexedDBSuccess } from "../actions/getDB-FromIndexedDB.action";

export interface getCheckRoleFromIndexedDBState {
    checkRoles: checkRolesResponse | null
  }
  
  export const initialState: getCheckRoleFromIndexedDBState = {
    checkRoles: null  
  };
  
  export const addCheckRoleFromIndexedDBReducer = createReducer(
    initialState,
    on(GetClientRoleFromIndexedDBSuccess, (state, action) => {    
      return {
        ...state,
        clientCredentials: action.checkRoles
      }
    }),
  );
  