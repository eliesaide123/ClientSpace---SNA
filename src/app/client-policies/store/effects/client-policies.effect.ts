import { Actions, createEffect, ofType } from "@ngrx/effects";
import { StorageService } from "../../../PouchDB/storage.service";
import { catchError, from, map, mergeMap, of, tap } from "rxjs";
import { Injectable } from "@angular/core";
import { loadClientCredentials, loadClientCredentialsFailure, loadClientCredentialsSuccess } from "../actions/client-policies.action";

debugger
@Injectable()
export class ClientPoliciesEffect {

    constructor(private actions$: Actions, private storageService: StorageService) { }

    loadItemFromDB$ = createEffect(() => this.actions$.pipe(
        ofType(loadClientCredentials),
        mergeMap(() =>
            this.storageService.getDB("AuthResponseCredentials", "AuthCredentialsStore").pipe(
                map((clientCredentials: any) => {
                    debugger
                    return loadClientCredentialsSuccess({ clientCredentials });
                }),
                catchError(error => of(loadClientCredentialsFailure({ error })))
            )
        )
    ));
}