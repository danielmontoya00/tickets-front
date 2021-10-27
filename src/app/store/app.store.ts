import { ActionReducerMap } from '@ngrx/store';
// import { AuthState } from 'src/auth/store/auth.reducer';
import { appReducer, AppRState } from './reducers/app.reducer';
import { authReducer, AuthState } from './reducers/auth.reducer';
import { clientReducer, ClientState } from './reducers/client.reducer';

export interface AppState {
  auth: AuthState;
  app: AppRState;
  client: ClientState;
}

export const appReducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  app: appReducer,
  client: clientReducer
}
