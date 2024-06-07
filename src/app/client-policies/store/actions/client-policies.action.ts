import { createAction, props } from "@ngrx/store";
import { UserCredentials } from "../../../shared/models/UserCredentials";

export const loadClientCredentials = createAction(
    '[Client Credentials] Load Client Credentials'
)

export const loadClientCredentialsSuccess = createAction(
    '[Client Credentials] Load Client Credentials Success',
    props<{ clientCredentials: UserCredentials | null }>()
);


export const loadClientCredentialsFailure = createAction(
    '[Client Credentials] Load Client Credentials Failure',
    props<{ error: any }>()
);