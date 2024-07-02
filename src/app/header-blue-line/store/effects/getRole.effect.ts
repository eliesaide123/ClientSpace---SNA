import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, mergeMap, of, take, tap } from "rxjs";
import { StorageService } from "../../../shared/services/storage.service";
import { CheckRoleFailure, CheckRoleRequest, CheckRoleSuccess } from "../actions/getRole.action";

@Injectable()
export class CheckRoleEffect {

    constructor(private actions$: Actions, private storageSrv: StorageService) { }

    loadCheckRole$ = createEffect(() => this.actions$.pipe(
        ofType(CheckRoleRequest),
        mergeMap(() => this.storageSrv.getDB<any>('CheckRoleDB', 'CheckRoleStore').pipe(
            map((checkRole) => CheckRoleSuccess({ checkRole })),
            catchError((error) => of(CheckRoleFailure({ error })))
        ))
    ))
}