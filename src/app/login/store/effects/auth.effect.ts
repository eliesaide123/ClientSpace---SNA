import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { login } from "../actions/auth.actions";
import { tap } from "rxjs/operators";
import { StorageService } from "../../../PouchDB/storage.service";
debugger
@Injectable()
export class AuthEffect {
  
  constructor(private actions$: Actions, private storageService: StorageService) {}
  
  saveAuthResponseToIndexedDB$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login), // Listen to login action
      tap(action => {
        debugger
        this.storageService.addDB(action.AuthResponse, 'AuthResponseCredentials', 'AuthCredentialsStore')
          .then(() => {
            console.log('AuthResponse saved to IndexedDB successfully');
          })
          .catch(error => {
            console.error('Error saving AuthResponse to IndexedDB:', error);
          });
      })
    ),
    { dispatch: false } // Disable dispatching since we don't want to emit any new actions
  );
}
