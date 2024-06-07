import { createReducer, on } from '@ngrx/store';
import { loadClientCredentialsSuccess } from '../actions/client-policies.action';
import { UserCredentials } from '../../../shared/models/UserCredentials';

export const reducerFeatureKey = 'clientCredentials';

export interface ClientCredentialsState {
  clientCredentials : UserCredentials | null
}

export const initialState: ClientCredentialsState = {
  clientCredentials : null
};

export const ClientCredentialsReducer = createReducer(
  initialState,
  on(loadClientCredentialsSuccess, (state, { clientCredentials }) => {
    return {
      ...state,
      clientCredentials: clientCredentials
    }
  }
  )
);

