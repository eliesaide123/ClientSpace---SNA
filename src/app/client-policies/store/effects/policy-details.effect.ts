import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { GetPolicyDetails } from "../actions";
import { catchError, exhaustMap, map, of, tap } from "rxjs";
import { ClientPoliciesService } from "../../../client-info/service/client-policies.service";
import { PolicyDetails } from "../../../shared/models/PolicyDetails";
import { Router } from "@angular/router";
import { StorageService } from "../../../shared/services/storage.service";
import { PolicyDetailsSuccess } from "../actions/policy-details.action";

@Injectable()
export class PolicyDetailsEffect {

    constructor(private actions$: Actions, private clientPolicySrv: ClientPoliciesService, private router: Router, private storageService: StorageService) { }

    savePolicyDetailsToIndexedDB$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PolicyDetailsSuccess),
            tap(action => {
                this.storageService.addDB(action.policyDetails, 'PolicyDetailsDB', 'PolicyDetailsStore')
                    .then(() => {
                        console.log('PolicyDetails saved to IndexedDB successfully');
                    })
                    .catch(error => {
                        console.error('Error saving PolicyDetails to IndexedDB:', error);
                    });
            })
        ),
        { dispatch: false }
    );

    getPolicyDetails$ = createEffect(() =>
        this.actions$.pipe(
            ofType(GetPolicyDetails.PolicyDetailsRequest),
            exhaustMap((action) => this.clientPolicySrv.getPolicyDetails(action.policyDetails).pipe(
                map((policyDetails: PolicyDetails) => {
                    return GetPolicyDetails.PolicyDetailsSuccess({ policyDetails: policyDetails })
                })
            )),
            catchError(error => {
                return of(GetPolicyDetails.PolicyDetailsFailure({ error }))
            })
        )
    )

    getPolicyDetailsSuccess$ = createEffect(() =>
        this.actions$.pipe(
            ofType(GetPolicyDetails.PolicyDetailsSuccess),
            map(({ policyDetails }) => {
                if (policyDetails) {
                    this.router.navigateByUrl('/policy-details');
                }
            })
        ),
        { dispatch: false }
    );
}