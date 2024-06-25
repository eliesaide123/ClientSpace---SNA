import { createReducer, on } from '@ngrx/store';
import { LoadClientCredentialsIndexedDBActions } from '../actions';
import { AuthResponse } from '../../../shared/models/AuthResponse';
export const reducerFeatureKey = 'clientCredentials';

export interface LoadClientCredentialsFromIndexedDBState {
  clientCredentials: AuthResponse | null
}

export const initialState: LoadClientCredentialsFromIndexedDBState = {
  clientCredentials: null  
};

export const LoadClientCredentialsFromIndexedDBReducer = createReducer(
  initialState,
  on(LoadClientCredentialsIndexedDBActions.loadClientCredentialsFromIndexedDBSuccess, (state, action) => {    
    return {
      ...state,
      clientCredentials: action.clientCredentials
    }
  })
);

