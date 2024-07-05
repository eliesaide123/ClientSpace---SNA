import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { login, loginFailure, loginSuccess } from "../actions/auth.actions";
import { catchError, map, switchMap, tap } from "rxjs/operators";
import { StorageService } from "../../../shared/services/storage.service";
import { AuthenticationService } from "../../service/authentication.service";
import { of } from "rxjs";
import { Route, Router } from "@angular/router";

@Injectable()
export class AuthEffect {
  
  constructor(private actions$: Actions, private storageService: StorageService, private authService: AuthenticationService, private router : Router) {}
  
  addingDBToIndexedDBasNULL$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginSuccess),
      tap(() => {        
        this.storageService.addDB(null, "AuthResponseCredentials", "AuthCredentialsStore");
        this.storageService.addDB(null, "CheckRoleDB", "CheckRoleStore");
        this.storageService.addDB(null, "ClientPoliciesDB", "ClientPoliciesStore")
        this.storageService.addDB(null, "PolicyDetailsDB", "PolicyDetailsStore")
      })
    ),
    { dispatch: false }
  );

  saveAuthResponseToIndexedDB$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginSuccess),
      tap(action => {        
        this.storageService.addDB(action.authResponse, 'AuthResponseCredentials', 'AuthCredentialsStore')
          .then(() => {
            console.log('AuthResponse saved to IndexedDB successfully');
          })
          .catch(error => {
            console.error('Error saving AuthResponse to IndexedDB:', error);
          });
      })
    ),
    { dispatch: false }
  );

  loginUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      switchMap(action => 
        this.authService.loginUser(action.credentials).pipe(
          map(authResponse => loginSuccess({ authResponse })),
          catchError(error => of(loginFailure({ error })))
        )
      )
    )
  );

  loginSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginSuccess),
      map(({ authResponse }) => {
        if (authResponse && authResponse.credentials.isAuthenticated) {
          if (authResponse.credentials.isFirstLogin) {
            this.router.navigateByUrl('/profile');
          } else {
            this.router.navigateByUrl('/client-policies');
          }
        }
      })
    ),
    { dispatch: false }
  );
}
