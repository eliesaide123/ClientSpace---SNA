import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { getClientInfoFailure, getClientInfoRequest, getClientInfoSuccess } from "../actions/get-client-info.action";
import { catchError, exhaustMap, map, of, switchMap } from "rxjs";
import { ClientPoliciesService } from "../../service/client-policies.service";
import { ClientInfo } from "../../../shared/models/clientInfo";

@Injectable()
export class GetClientInfo{

    constructor(private actions$: Actions, private clientPolicyService : ClientPoliciesService) {}

    getClientInfo$ = createEffect(() => this.actions$.pipe(
        ofType(getClientInfoRequest),
        switchMap((action) => this.clientPolicyService.getClientInfo(action.getClientInfo).pipe(
            map((getClientInfo : ClientInfo | null) => {
                return getClientInfoSuccess({getClientInfo : getClientInfo})
            })
        )),
        catchError(error => {
            console.error("Error while checking Client Info ", error)
            return of(getClientInfoFailure({error}));
        })
    ))
}