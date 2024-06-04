import { Injectable } from "@angular/core";
import { Actions, ofType } from "@ngrx/effects";
import { AuthResponse } from "../../../shared/models/AuthResponse";
import { login } from "../actions/auth.actions";
import { map, tap } from "rxjs/operators";
import { PouchdbService } from "../../../PouchDB/pouchdb.service";
debugger;
@Injectable()
export class AuthEffect {
  constructor(private actions$: Actions, private pouchdbService: PouchdbService) {
    debugger;
    this.actions$.pipe(
      ofType(login),
      map(action => (action as any).AuthResponse),
      tap((authResponse: AuthResponse) => {
        // Save AuthResponse into PouchDB
        debugger;
        this.pouchdbService.addItem({
          _id: 'SNA_DB',
          response: authResponse
        }).then(() => {
          console.log('AuthResponse saved in PouchDB');
        }).catch(err => {
          console.error('Failed to save AuthResponse in PouchDB', err);
        });
      })
    ).subscribe();
  }
}
