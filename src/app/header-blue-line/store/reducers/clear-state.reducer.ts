import { ActionReducer, MetaReducer } from "@ngrx/store";
import { logoutActionSuccess } from "../actions/logout.actions";

export function clearState(reducer : ActionReducer<any>): ActionReducer<any>{
    return function(state,action){
        if(action.type === logoutActionSuccess.type){
            state = undefined;
        }
        return reducer(state,action);
    };
}

export const metaReducers : MetaReducer<any>[] = [clearState]