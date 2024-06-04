import { createFeatureSelector, createSelector } from "@ngrx/store";
import { GetUserState } from "../reducers/reducer.reducer";

export const selectGetUserState = createFeatureSelector<GetUserState>("User");

export const getUserSelector = createSelector(    
    selectGetUserState,
    state => state.getUserResponse 
)