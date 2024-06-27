import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { logoutActionFailure, logoutActionRequest, logoutActionSuccess } from "../actions/logout.actions";
import { catchError, of, switchMap, tap } from "rxjs";
import { Store } from "@ngrx/store";
debugger;
@Injectable()
export class LogoutEffects {
    
    constructor(private route: Router, private actions$: Actions, private store: Store) { }

    logout$ = createEffect(() =>
        this.actions$.pipe(
            ofType(logoutActionRequest),
            switchMap(() =>
                of(logoutActionSuccess()).pipe(
                    tap(() => {
                        debugger;
                        this.route.navigate(['/login'])
                    }),
                    catchError((error) => of(logoutActionFailure({ error })))
                )
            )
        )
    )
}