import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ClientPoliciesFailure, ClientPoliciesRequest, ClientPoliciesSuccess } from "../actions/client-policies.action";
import { catchError, exhaustMap, map, of, switchMap, tap } from "rxjs";
import { ClientPoliciesService } from "../../../client-info/service/client-policies.service";
import { GetClientInfo } from "../../../shared/models/GetClientInfo";

@Injectable()
export class ClientPoliciesEffect{
    
    constructor(private actions$: Actions, private clientPoliciesService : ClientPoliciesService) {}

    getClientPolicies$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ClientPoliciesRequest),            
            exhaustMap(action => this.clientPoliciesService.getPorfolio(action.clientPolicies).pipe(
                map((clientPolicies : GetClientInfo) => {                    
                    return ClientPoliciesSuccess({ clientPolicies: clientPolicies })
                })
            )),
            catchError(error => {
                console.error("Error while fetching Client Policies", error);
                return of(ClientPoliciesFailure({ error }))
            })            
        )
    )
}