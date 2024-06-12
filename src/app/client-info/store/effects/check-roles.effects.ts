import { Actions, createEffect, ofType } from "@ngrx/effects";
import { checkRolesResponse } from "../../../shared/models/checkRolesResponse";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { Injectable } from "@angular/core";
import { checkRoleFailure, checkRoleRequest, checkRoleSuccess } from "../actions/check-roles.actions";
import { AuthenticationService } from "../../../login/service/authentication.service";
import { StorageService } from "../../../IndexedDB/storage.service";

@Injectable()
export class CheckRoles{

    constructor(private actions$: Actions, private authService: AuthenticationService, private storageService : StorageService) {}

    checkRoles$ = createEffect(() => this.actions$.pipe(
        ofType(checkRoleRequest),
        switchMap(action => this.authService.checkRoles(action.myCredentials).pipe(
           map((checkRoles : checkRolesResponse | null) => {            
            return checkRoleSuccess({ checkRoles: checkRoles })
           })
        )),
        catchError(error => {
            console.error('Error while checking Roles', error);
            return of(checkRoleFailure({ error }))
        })        
    ))

    checkRoleSuccess$ = createEffect(() =>
        this.actions$.pipe(
          ofType(checkRoleSuccess), // Listen to login action
          tap(action => {        
            this.storageService.addDB(action.checkRoles, 'CheckRole', 'CheckRoleStore')
              .then(() => {
                console.log('CheckRole saved to IndexedDB successfully');
              })
              .catch(error => {
                console.error('Error saving CheckRole to IndexedDB:', error);
              });
          })
        ),
        { dispatch: false } // Disable dispatching since we don't want to emit any new actions
      );
}

