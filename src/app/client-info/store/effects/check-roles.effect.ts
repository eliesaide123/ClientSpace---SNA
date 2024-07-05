import { Actions, createEffect, ofType } from "@ngrx/effects";
import { checkRolesResponse } from "../../../shared/models/checkRolesResponse";
import { catchError, exhaustMap, map, of, switchMap, take, tap } from "rxjs";
import { Injectable } from "@angular/core";
import { checkRoleFailure, checkRoleRequest, checkRoleSuccess } from "../actions/check-roles.action";
import { AuthenticationService } from "../../../login/service/authentication.service";
import { StorageService } from "../../../shared/services/storage.service";

@Injectable()
export class CheckRoles {

    constructor(private actions$: Actions, private authService: AuthenticationService, private storageService: StorageService) { }

    checkRoles$ = createEffect(() => this.actions$.pipe(
        ofType(checkRoleRequest),
        exhaustMap(action => this.authService.checkRoles(action.myCredentials).pipe(
            map((checkRoles: checkRolesResponse | null) => {
                return checkRoleSuccess({ checkRole: checkRoles })
            })
        )),
        catchError(error => {
            console.error('Error while checking Roles', error);
            return of(checkRoleFailure({ error }))
        })
    ))

    saveCheckRoleToIndexedDB$ = createEffect(() => this.actions$.pipe(
        ofType(checkRoleSuccess),        
        tap(action => {            
            this.storageService.addDB(action.checkRole, "CheckRoleDB", "CheckRoleStore")
                .then(() => {
                    console.log('CheckRole saved to IndexedDB successfully');
                })
                .catch(error => {
                    console.error('Error saving CheckRole to IndexedDB:', error);
                });
        }),        
    ), { dispatch: false });
}

