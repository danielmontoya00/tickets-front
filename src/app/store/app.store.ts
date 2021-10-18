import { ActionReducerMap } from '@ngrx/store';
// import { AuthState } from 'src/auth/store/auth.reducer';
import { appReducer, AppRState } from './reducers/app.reducer';
import { authReducer, AuthState } from './reducers/auth.reducer';

export interface AppState {
  auth: AuthState;
  app: AppRState;
}

export const appReducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  app: appReducer
}
