import { createReducer, on } from '@ngrx/store';
import { Ticket } from 'src/models/Ticket.model';
import * as clientActions from '../actions/client.actions';

export interface ClientState {
  tickets: Ticket[];
  error: any;
  cargando: boolean;
};

const initialState: ClientState = {
  tickets: [],
  error: null,
  cargando: false
};

export const clientReducer = createReducer(
  initialState,
  on(clientActions.getMyTickets, (state) => ({
    ...state,
    cargando: true,
    error: null,
  })),
  on(clientActions.getMyTicketsSuccess, (state, { data }) => ({
    ...state,
    cargando: false,
    tickets: [ ...data ]
  })),
  on(clientActions.getMyTicketsFailure, (state, { error }) => ({
    ...state,
    cargando: false,
    error: { ...error }
  })),
);
