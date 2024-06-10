import { createAction, props } from "@ngrx/store";
import { UserCredentials } from "../../../shared/models/UserCredentials";
import { getClientPolicies } from "../../../shared/models/GetClientPolicies";
import { AuthResponse } from "../../../shared/models/AuthResponse";
import { checkRoles } from "../../../shared/models/checkRoles";
import { checkRolesResponse } from "../../../shared/models/checkRolesResponse";

export const loadClientCredentialsFromIndexedDB = createAction(
    '[Client Credentials] Load Client Credentials'    
)

export const loadClientCredentialsFromIndexedDBSuccess = createAction(
    '[Client Credentials] Load Client Credentials From IndexedDB Success',
    props<{ clientCredentials: AuthResponse }>()
)

export const loadClientCredentialsFromIndexedDBFailure = createAction(
    '[Client Credentials] Load Client Credentials From IndexedDB Failure',
    props<{ error: any }>()
)

export const loadClientCredentials = createAction(
    '[Client Credentials] Load Client Credentials',
    props<{ checkRoles: checkRolesResponse }>()
)

export const loadClientCredentialsSuccess = createAction(
    '[Client Credentials] Load Client Credentials Success',
    props<{ checkRoles: checkRolesResponse | null }>()
);


export const loadClientCredentialsFailure = createAction(
    '[Client Credentials] Load Client Credentials Failure',
    props<{ error: any }>()
);