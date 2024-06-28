// import { Injectable } from "@angular/core";
// import { StorageService } from "../../../shared/services/storage.service";
// import { Actions, createEffect, ofType } from "@ngrx/effects";
// //import { GetClientRoleFromIndexedDB, GetClientRoleFromIndexedDBFailure, GetClientRoleFromIndexedDBSuccess } from "../actions/getDB-FromIndexedDB.action";
// import { catchError, map, mergeMap, of } from "rxjs";
// import { checkRolesResponse } from "../../../shared/models/checkRolesResponse";

// @Injectable()
// export class HeaderBlueLineEffectGet {

//     constructor(private actions$: Actions, private storageService: StorageService) { }

//     // loadCheckRoleFromDB$ = createEffect(() => 
//     //     this.actions$.pipe(
//     //     ofType(GetClientRoleFromIndexedDB),
//     //     mergeMap(() => this.storageService.getDB<checkRolesResponse>("CheckRolesDB", "CheckRolesStore").pipe(
//     //         map((checkRoles: checkRolesResponse | null) => {  
//     //             if (checkRoles) {                                      
//     //                 return GetClientRoleFromIndexedDBSuccess({ checkRoles: checkRoles });
//     //             } else {
//     //                 return GetClientRoleFromIndexedDBFailure({ error: "CheckRole is null" });
//     //             }
//     //         }),
//     //         catchError(error => of(GetClientRoleFromIndexedDBFailure({ error })))
//     //     ))
//     // ));
// }