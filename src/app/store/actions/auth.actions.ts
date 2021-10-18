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
