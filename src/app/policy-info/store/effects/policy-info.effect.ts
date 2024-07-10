import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CheckPolicyInfoFailure, CheckPolicyInfoRequest, CheckPolicyInfoSuccess } from "../actions/policy-info.action";
import { catchError, exhaustMap, map, mergeMap, of } from "rxjs";
import { StorageService } from "../../../shared/services/storage.service";
import { Injectable } from "@angular/core";
import { CheckPolicyDetailsFailure, CheckPolicyDetailsRequest, CheckPolicyDetailsSuccess } from "../actions/policy-details.action";

@Injectable()
export class PolicyInfoEffect {

    constructor(private actions$: Actions, private storageSrv: StorageService) { }

    loadClientPolicies$ = createEffect(() => this.actions$.pipe(
        ofType(CheckPolicyInfoRequest),
        mergeMap(() => this.storageSrv.getDB<any>('ClientPoliciesDB', 'ClientPoliciesStore').pipe(
            map((getClientInfo) => CheckPolicyInfoSuccess({ getClientInfo })),
            catchError((error) => of(CheckPolicyInfoFailure({ error })))
        ))
    ))

    loadPolicyDetails$ = createEffect(() => this.actions$.pipe(
        ofType(CheckPolicyDetailsRequest),
        mergeMap(() => this.storageSrv.getDB<any>('PolicyDetailsDB', 'PolicyDetailsStore').pipe(
            map((GetPolicyDetails) => CheckPolicyDetailsSuccess({ GetPolicyDetails })),
            catchError((error) => of(CheckPolicyDetailsFailure({ error })))
        ))
    ))
}