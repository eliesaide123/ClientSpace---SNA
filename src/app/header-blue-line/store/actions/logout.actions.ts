import { createAction, props } from '@ngrx/store';

export const logoutActionRequest = createAction(
    '[Logout Action] Logout Request'    
);

export const logoutActionSuccess = createAction(
    '[Logout Action] Logout Success'
)

export const logoutActionFailure = createAction(
    '[Logout Action] Logout Failure',
    props<{ error : any}>()
)