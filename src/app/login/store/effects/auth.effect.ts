import { Injectable } from "@angular/core"
import { Actions } from "@ngrx/effects"
import { AuthResponse } from "../../../shared/models/AuthResponse"

@Injectable()
export class AuthEffect {

    constructor(private actions$: Actions) {
        actions$.subscribe(action => {
            if(action.type == '[Login Action] User Login'){
                const authResponse: AuthResponse = (action as any).AuthResponse
                localStorage.setItem('user', JSON.stringify(authResponse))
            }
        })
    }
}