import { createAction, props } from "@ngrx/store";
import { AuthResponse } from "../../../shared/models/AuthResponse";

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