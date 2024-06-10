import { Actions, createEffect, ofType } from "@ngrx/effects";
import { StorageService } from "../../../IndexedDB/storage.service";
import { catchError, from, map, mergeMap, of, switchMap, tap } from "rxjs";
import { Injectable } from "@angular/core";
import { loadClientCredentials, loadClientCredentialsFromIndexedDB, loadClientCredentialsFromIndexedDBFailure, loadClientCredentialsFromIndexedDBSuccess, loadClientCredentialsSuccess } from "../actions/client-credentials.action";
import { AuthenticationService } from "../../../login/service/authentication.service";
import { AuthResponse } from "../../../shared/models/AuthResponse";
import { checkRoles } from "../../../shared/models/checkRoles";
import { checkRolesResponse } from "../../../shared/models/checkRolesResponse";

debugger
@Injectable()
export class ClientCredentialsEffect {

    constructor(private actions$: Actions, private storageService: StorageService, private authService: AuthenticationService) { }

    loadItemFromDB$ = createEffect(() => this.actions$.pipe(
        ofType(loadClientCredentialsFromIndexedDB),
        mergeMap(() =>
            this.storageService.getDB<AuthResponse>("AuthResponseCredentials", "AuthCredentialsStore").pipe(
                map((authResponse: AuthResponse | null) => {
                    debugger
                    if (authResponse) {
                        debugger
                        return loadClientCredentialsFromIndexedDBSuccess({ clientCredentials: authResponse });
                    } else {
                        return loadClientCredentialsFromIndexedDBFailure({ error: "AuthResponse is null" });
                    }
                }),
                catchError(error => of(loadClientCredentialsFromIndexedDBFailure({ error })))
            )
        )
    ));

    checkRoles$ = createEffect(() => this.actions$.pipe(
        ofType(loadClientCredentialsFromIndexedDBSuccess),
        switchMap(action => this.authService.checkRoles(action.clientCredentials.credentials).pipe(
           map((checkRoles : checkRolesResponse | null) => {
            return loadClientCredentialsSuccess({ checkRoles: checkRoles })
           })
        )),
        catchError(error => {
            console.error('Error while checking Roles', error);
            return of(loadClientCredentialsFromIndexedDBFailure({ error }))
        })
        
    ))
}