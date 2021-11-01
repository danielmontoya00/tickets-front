import { createAction, props } from '@ngrx/store';
import { Empleado } from '../../../models/Empleado.model';

export const login = createAction(
  '[Auth] Login',
  props<{ identifier: string, password: string }>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ user: Empleado, token: string }>()
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: any }>()
);

export const cerrarSesion = createAction(
  '[Auth] Cerrar Sesion',
);

export const llenarSesion = createAction(
  '[Auth] Llenar Sesion',
  props<{
    user: Empleado | null
  }>()
);

export const recuperarPassword = createAction(
  '[Auth] Recuperar Password',
  props<{
    email: string
  }>()
);

export const recuperarPasswordSuccess = createAction(
  '[Auth] Recuperar Password Success'
);

export const recuperarPasswordFailure = createAction(
  '[Auth] Recuperar Password Failure',
  props<{
    error: any
  }>()
);


export const resetPassword = createAction(
  '[Auth] Reset Password',
  props<{
    code: string,
    password: string,
    passwordConfirmation: string
  }>()
);

export const resetPasswordSuccess = createAction(
  '[Auth] Reset Password Success'
);

export const resetPasswordFailure = createAction(
  '[Auth] Reset Password Failure',
  props<{
    error: any
  }>()
);

