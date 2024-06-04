import { createReducer, on } from '@ngrx/store';

export const reducerFeatureKey = 'reducer';

export interface ClientPolicieState {
  
}

export const initialState: ClientPolicieState = {
  
};

export const ClientPoliciesReducer = createReducer(
  initialState,

);

