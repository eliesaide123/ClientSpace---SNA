import { createReducer, on } from '@ngrx/store';
import { AuthResponse } from '../../../shared/models/AuthResponse';
import { AuthAction } from '../actions';

export const reducerFeatureKey = 'LoginAuth';

export interface AuthState {
  AuthResponse: AuthResponse | null
}

export const initialAuthState: AuthState = {
  AuthResponse : null
};

export const authReducer = createReducer(  
  initialAuthState,
  on(AuthAction.loginSuccess, (state, action) => {
    return{      
      ...state,      
      AuthResponse: action.authResponse
    }
  })
);