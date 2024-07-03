import { createAction, props } from "@ngrx/store";
import { checkRolesResponse } from "../../../shared/models/checkRolesResponse";
import { UserCredentials } from "../../../shared/models/UserCredentials";

export const checkRoleRequest = createAction(
    '[Check Role] Check Role Request',
    props<{ myCredentials: UserCredentials }>()
)

export const checkRoleSuccess = createAction(
    '[Check Role Success] Check Role Success',
    props<{ checkRole: checkRolesResponse | null }>()
);

export const checkRoleFailure = createAction(
    '[Check Role Failure] Check Role Failure',
    props<{ error: any }>()
);