import { createReducer, on } from "@ngrx/store";
import { Ticket } from "src/models/Ticket.model";
import { Empleado } from "src/models/Empleado.model";
import { Categoria } from '../../../models/Categoria.model';
import * as appActions from '../actions/app.actions';

export interface AppRState {
  cargando: boolean;
  error: any;
  empleados: Empleado[];
  tickets: Ticket[];
  categorias: Categoria[];
};

const initialState: AppRState = {
  cargando: false,
  error: null,
  empleados: [],
  tickets: [],
  categorias: []
};


export const appReducer = createReducer(
  initialState,

  /**
   * Acciones get
   */
  on(appActions.getUser, (state) => ({
    ...state,
    cargando: true,
    error: null,
  })),
  on(appActions.getUserSuccess, (state, { data }) => ({
    ...state,
    cargando: false,
    empleados: [...data]
  })),
  on(appActions.getUserFailure, (state, { error }) => ({
    ...state,
    cargando: false,
    error: { ...error }
  })),

  on(appActions.getTickets, (state) => ({
    ...state,
    cargando: true,
    error: null,
  })),
  on(appActions.getTicketsSuccess, (state, { data }) => ({
    ...state,
    cargando: false,
    tickets: [...data]
  })),
  on(appActions.getTicketsFailure, (state, { error }) => ({
    ...state,
    cargando: false,
    error: { ...error }
  })),

  on(appActions.getCategorias, (state) => ({
    ...state,
    cargando: true,
    error: null,
  })),
  on(appActions.getCategoriasSuccess, (state, { data }) => ({
    ...state,
    cargando: false,
    categorias: [...data]
  })),
  on(appActions.getCategoriasFailure, (state, { error }) => ({
    ...state,
    cargando: false,
    error: { ...error }
  })),
  /**
   * Acciones delete
   */
  on(appActions.deleteUser, (state) => ({
    ...state,
    cargando: true,
    error: null,
  })),
  on(appActions.deleteUserSuccess, (state, { data }) => ({
    ...state,
    cargando: false,
    empleados: state.empleados.filter((x) => x.id !== data.id)
  })),
  on(appActions.deleteUserFailure, (state, { error }) => ({
    ...state,
    cargando: false,
    error: { ...error }
  })),

  on(appActions.deleteCategorias, (state) => ({
    ...state,
    cargando: true,
    error: null,
  })),
  on(appActions.deleteCategoriasSuccess, (state, { data }) => ({
    ...state,
    cargando: false,
    categorias: state.categorias.filter((x) => x.id !== data.id)
  })),
  on(appActions.deleteCategoriasFailure, (state, { error }) => ({
    ...state,
    cargando: false,
    error: { ...error }
  })),

  on(appActions.deleteTickets, (state) => ({
    ...state,
    cargando: true,
    error: null,
  })),
  on(appActions.deleteTicketsSuccess, (state, { data }) => ({
    ...state,
    cargando: false,
    tickets: state.tickets.filter((x) => x.id !== data.id)
  })),
  on(appActions.deleteTicketsFailure, (state, { error }) => ({
    ...state,
    cargando: false,
    error: { ...error }
  })),






);
