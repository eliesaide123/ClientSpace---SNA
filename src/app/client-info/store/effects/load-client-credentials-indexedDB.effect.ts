import { Actions, createEffect, ofType } from "@ngrx/effects";
import { StorageService } from "../../../IndexedDB/storage.service";
import { catchError, from, map, mergeMap, of, switchMap, tap } from "rxjs";
import { Injectable } from "@angular/core";
import { loadCheckRoleFromIndexedDB, loadCheckRoleFromIndexedDBFailure, loadCheckRoleFromIndexedDBSuccess, loadClientCredentialsFromIndexedDB, loadClientCredentialsFromIndexedDBFailure, loadClientCredentialsFromIndexedDBSuccess } from "../actions/load-client-credentials-indexedDB.action";
import { AuthenticationService } from "../../../login/service/authentication.service";
import { AuthResponse } from "../../../shared/models/AuthResponse";
import { checkRoles } from "../../../shared/models/checkRoles";

@Injectable()
export class LoadClientCredentialsFromIndexedDB {

    constructor(private actions$: Actions, private storageService: StorageService, private authService: AuthenticationService) { }

    loadAuthFromDB$ = createEffect(() => this.actions$.pipe(
        ofType(loadClientCredentialsFromIndexedDB),
        mergeMap(() => this.storageService.getDB<AuthResponse>("AuthResponseCredentials", "AuthCredentialsStore").pipe(
            map((authResponse: AuthResponse | null) => {                
                if (authResponse) { 
                    debugger;                   
                    return loadClientCredentialsFromIndexedDBSuccess({ clientCredentials: authResponse });
                } else {
                    return loadClientCredentialsFromIndexedDBFailure({ error: "AuthResponse is null" });
                }
            }),
            catchError(error => of(loadClientCredentialsFromIndexedDBFailure({ error })))
        ))
    ));

    loadCheckRoleFromDB$ = createEffect(() => this.actions$.pipe(
        ofType(loadCheckRoleFromIndexedDB),
        mergeMap(() => this.storageService.getDB<checkRoles>("CheckRole", "CheckRoleStore").pipe(
            map((checkRoles: checkRoles | null) => {                
                if (checkRoles) {   
                    debugger;                 
                    return loadCheckRoleFromIndexedDBSuccess({ checkRoles: checkRoles });
                } else {
                    return loadCheckRoleFromIndexedDBFailure({ error: "CheckRoles is null" });
                }
            }),
            catchError(error => of(loadCheckRoleFromIndexedDBFailure({ error })))
        ))
    ));
}