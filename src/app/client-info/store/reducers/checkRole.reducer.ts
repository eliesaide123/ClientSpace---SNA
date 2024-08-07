import { createReducer, on } from "@ngrx/store"
import { checkRolesResponse } from "../../../shared/models/checkRolesResponse"
import { CheckRolesActions } from "../actions"
import { CheckRoleSuccess } from "../../../header-blue-line/store/actions/getRole.action"

export interface CheckRoleState {
  checkRole: checkRolesResponse | null
}

export const CheckRoleInitialState: CheckRoleState = {
  checkRole: null
}

export const CheckRolesReducer = createReducer(
  CheckRoleInitialState,
  on(CheckRolesActions.checkRoleSuccess, (state, action) => {
    return {
      ...state,
      checkRole: action.checkRole
    }
  })
)