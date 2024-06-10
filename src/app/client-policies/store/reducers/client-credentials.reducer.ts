import { createReducer, on } from '@ngrx/store';
import { loadClientCredentialsFromIndexedDBSuccess } from '../actions/client-credentials.action';
import { AuthResponse } from '../../../shared/models/AuthResponse';

export const reducerFeatureKey = 'clientCredentials';

export interface ClientCredentialsState {
  clientCredentials: AuthResponse | null
}

export const initialState: ClientCredentialsState = {
  clientCredentials: null
};

export const ClientCredentialsReducer = createReducer(
  initialState,
  on(loadClientCredentialsFromIndexedDBSuccess, (state, action) => {
    debugger
    return {
      ...state,
      clientCredentials: action.clientCredentials
    }
  })
);

