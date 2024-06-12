import { createReducer, on } from "@ngrx/store"
import { checkRolesResponse } from "../../../shared/models/checkRolesResponse"
import { CheckRolesActions } from "../actions"

export const key = "CheckRole"

export interface CheckRoleState{
    checkRole : checkRolesResponse | null
}

export const initState : CheckRoleState = {
    checkRole: null
}

export const CheckRolesReducer = createReducer(
    initState,
    on(CheckRolesActions.checkRoleSuccess, (state, action) => {        
        return {
          ...state,
          checkRole: action.checkRoles
        }
      })
)