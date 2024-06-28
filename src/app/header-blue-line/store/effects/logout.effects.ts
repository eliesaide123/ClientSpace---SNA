import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { logoutActionFailure, logoutActionRequest, logoutActionSuccess } from "../actions/logout.actions";
import { catchError, of, switchMap, tap } from "rxjs";
import { Store } from "@ngrx/store";
import { StorageService } from "../../../shared/services/storage.service";
debugger;
@Injectable()
export class LogoutEffects {
    
    constructor(private route: Router, private actions$: Actions, private store: Store, private storageService : StorageService) { }

    logout$ = createEffect(() =>
        this.actions$.pipe(
            ofType(logoutActionRequest),
            switchMap(() =>
                of(logoutActionSuccess()).pipe(
                    tap(() => {     
                        this.storageService.deleteAllDatabases();                   
                        this.route.navigate(['/login'])
                    }),
                    catchError((error) => of(logoutActionFailure({ error })))
                )
            )
        )
    , {dispatch : false})
}