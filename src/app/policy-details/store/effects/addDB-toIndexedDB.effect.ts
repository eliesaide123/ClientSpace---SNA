// import { Injectable } from "@angular/core";
// import { Actions, createEffect, ofType } from "@ngrx/effects";
// import { StorageService } from "../../../shared/services/storage.service";
// import { checkRoleSuccess } from "../../../client-info/store/actions/check-roles.action";
// import { tap } from "rxjs";

// @Injectable()
// export class HeaderBlueLineEffectAdd {

//     constructor(private actions$: Actions, private storageService: StorageService) { }

//     // saveCheckRoleToIndexedDB$ = createEffect(() =>
//     //     this.actions$.pipe(
//     //         ofType(checkRoleSuccess),
//     //         tap(action => {
//     //             debugger;
//     //             this.storageService.addDB(action.checkRoles, 'CheckRolesDB', 'CheckRolesStore')
//     //                 .then(() => {
//     //                     console.log('AuthResponse saved to IndexedDB successfully');
//     //                 })
//     //                 .catch(error => {
//     //                     console.error('Error saving AuthResponse to IndexedDB:', error);
//     //                 });
//     //         })
//     //     ),
//     //     { dispatch: false }
//     // )
// }