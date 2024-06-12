import { createAction, props } from "@ngrx/store";
import { AuthResponse } from "../../../shared/models/AuthResponse";
import { checkRoles } from "../../../shared/models/checkRoles";

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

export const loadCheckRoleFromIndexedDB = createAction(
    '[Check Role] Load Check Role'
)

export const loadCheckRoleFromIndexedDBSuccess = createAction(
    '[Check Role Success] Load Check Role From IndexedDB Success',
    props<{ checkRoles: checkRoles }>()
)

export const loadCheckRoleFromIndexedDBFailure = createAction(
    '[Check Role Failure] Load Check Role From IndexedDB Failure',
    props<{ error: any }>()
)