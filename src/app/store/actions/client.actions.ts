import { createAction, props } from "@ngrx/store";

export const getMyTickets = createAction('[App] Obtener Mis Tickets');
export const getMyTicketsSuccess = createAction('[App] Obtener Mis Tickets Success', props<{data: any[]}>());
export const getMyTicketsFailure = createAction('[App] Obtener Mis Tickets Failure', props<{error: any}>());

export const updateTickets = createAction('[App] Update Ticket', props<{estado: string, id: number}>());
export const updateTicketsSuccess = createAction('[App] Update Ticket Success', props<{data: any}>());
export const updateTicketsFailure = createAction('[App] Update Ticket Failure', props<{error: any}>());
