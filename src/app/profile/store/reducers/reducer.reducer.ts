import { createReducer, on } from '@ngrx/store';
import { GetUserResponse } from '../../../shared/models/GetUserResponse';
import { getUserAction } from '../actions';

export const reducerFeatureKey = 'User';

export interface GetUserState {
  getUserResponse: GetUserResponse | null
}

export const initialState: GetUserState = {
  getUserResponse: null
};

export const getUserReducer = createReducer(
  initialState,
  on(getUserAction.getUserAction, (state, action) => {
    return {
      ...state,
      getUserResponse: action.GetUserResponse
    };
  }),
);
