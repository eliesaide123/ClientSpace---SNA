import { createReducer, on } from '@ngrx/store';
import { LoadClientCredentialsIndexedDBActions } from '../actions';
import { AuthResponse } from '../../../shared/models/AuthResponse';
import { loadCheckRoleFromIndexedDBSuccess } from '../actions/load-client-credentials-indexedDB.action';
import { checkRoles } from '../../../shared/models/checkRoles';

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
  }),  
);

