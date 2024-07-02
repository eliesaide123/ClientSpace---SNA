import { createAction, props } from "@ngrx/store"
import { checkRolesResponse } from "../../../shared/models/checkRolesResponse"

export const GetClientRoleFromIndexedDB = createAction(
    '[Client Role] Get Client Role From IndexedDB'
)

export const GetClientRoleFromIndexedDBSuccess = createAction(
    '[Client Role] Get Client Role From IndexedDB Success',
    props<{ checkRoles: checkRolesResponse | null }>()
)

export const GetClientRoleFromIndexedDBFailure = createAction(
    '[Client Role] Get Client Role From IndexedDB Failure',
    props<{ error: any }>()
)