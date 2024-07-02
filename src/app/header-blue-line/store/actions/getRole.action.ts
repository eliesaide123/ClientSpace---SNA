import { createAction, props } from '@ngrx/store';
import { checkRolesResponse } from '../../../shared/models/checkRolesResponse';

export const CheckRoleRequest = createAction(
    '[Check Role Request] Check Role Request'
);

export const CheckRoleSuccess = createAction(
    '[Check Role Success] Check Role Success',
    props<{ checkRole: checkRolesResponse }>()
);

export const CheckRoleFailure = createAction(
    '[Check Role Failure] Check Role Failure', 
    props<{ error: any }>()
);
