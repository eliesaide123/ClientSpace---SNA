import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { getUserAction } from "../actions";
import { mergeMap, of } from "rxjs";

@Injectable()
export class GetUserEffect {
    constructor(private actions$: Actions) {}
  
    getUser$ = createEffect(() =>
      this.actions$.pipe(
        ofType(getUserAction.getUserAction),
        mergeMap(() => {
          const userString = localStorage.getItem('user');
          if (userString) {
            const user = JSON.parse(userString);
            // Dispatch an action to set user in store
            return of({ type: '[User] Set User', GetUserResponse: user });
          } else {
            // If user not available in session storage, do nothing or dispatch another action if needed
            return of({ type: '[User] User Not Found' }); // You can dispatch a separate action here if needed
          }
        })
      )
    );
  }