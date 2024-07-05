import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ClientPoliciesFailure, ClientPoliciesRequest, ClientPoliciesSuccess } from "../actions/client-policies.action";
import { catchError, exhaustMap, map, of, switchMap, take, tap } from "rxjs";
import { ClientPoliciesService } from "../../../client-info/service/client-policies.service";
import { GetClientInfo } from "../../../shared/models/GetClientInfo";
import { StorageService } from "../../../shared/services/storage.service";

@Injectable()
export class ClientPoliciesEffect {

    constructor(private actions$: Actions, private clientPoliciesService: ClientPoliciesService, private storageService: StorageService) { }

    getClientPolicies$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ClientPoliciesRequest),
            exhaustMap(action => this.clientPoliciesService.getPorfolio(action.clientPolicies).pipe(
                map((clientPolicies: GetClientInfo) => {
                    return ClientPoliciesSuccess({ clientPolicies: clientPolicies })
                })
            )),
            catchError(error => {
                console.error("Error while fetching Client Policies", error);
                return of(ClientPoliciesFailure({ error }))
            })
        )
    )

    saveClientPoliciesToIndexedDB$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ClientPoliciesSuccess),
            tap(action => {                
                this.storageService.addDB(action.clientPolicies, 'ClientPoliciesDB', 'ClientPoliciesStore')
                    .then(() => {
                        console.log('ClientPolicies saved to IndexedDB successfully');
                    })
                    .catch(error => {
                        console.error('Error saving ClientPolicies to IndexedDB:', error);
                    });
            })
        ),
        { dispatch: false }
    );
}