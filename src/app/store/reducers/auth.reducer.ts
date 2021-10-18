import { createReducer, on } from '@ngrx/store';
import { Empleado } from 'src/models/Empleado.model';
import * as auth from '../actions/auth.actions';

export interface AuthState {
  user: Empleado | null;
  error: any;
  cargando: boolean;
};

const initialState: AuthState = {
  user: null,
  error: null,
  cargando: false
};

export const authReducer = createReducer(
  initialState,
  on(auth.login, (state) => ({
    ...state,
    cargando: true,
    error: null,
  })),
  on(auth.loginSuccess, (state, { user }) => ({
    ...state,
    cargando: false,
    user: { ...user }
  })),
  on(auth.loginFailure, (state, { error }) => ({
    ...state,
    cargando: false,
    error: { ...error }
  })),
  on(auth.cerrarSesion, (state) => ({
    ...initialState
  })),
  on(auth.llenarSesion, (state, { user }) => ({
    ...state,
    user
  })),


);
