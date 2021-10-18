import { createAction, props } from "@ngrx/store";
import { Categoria } from "src/models/Categoria.model";
import { EstadosTicket, Ticket } from "src/models/Ticket.model";
import { Empleado } from "src/models/Empleado.model";

/**
 * Acciones de obtener
 */
export const getUser = createAction('[App] Obtener Usuarios');
export const getUserSuccess = createAction('[App] Obtener Usuarios Success', props<{data: any[]}>());
export const getUserFailure = createAction('[App] Obtener Usuarios Failure', props<{error: any}>());

export const getCategorias = createAction('[App] Obtener Categorias');
export const getCategoriasSuccess = createAction('[App] Obtener Categorias Success', props<{data: any[]}>());
export const getCategoriasFailure = createAction('[App] Obtener Categorias Failure', props<{error: any}>());

export const getTickets = createAction('[App] Obtener Tickets');
export const getTicketsSuccess = createAction('[App] Obtener Tickets Success', props<{data: any[]}>());
export const getTicketsFailure = createAction('[App] Obtener Tickets Failure', props<{error: any}>());

/**
 * Acciones de editar
 */
export const updateUser = createAction('[App] Actualizar Usuarios', props<{ id: number, username: string, email: string, password: string }>());
export const updateUserSuccess = createAction('[App] Actualizar Usuarios Success', props<{data: any}>());
export const updateUserFailure = createAction('[App] Actualizar Usuarios Failure', props<{error: any}>());

export const updateCategorias = createAction('[App] Actualizar Categorias', props<{ id: number, nombre: string, descripcion: string }>());
export const updateCategoriasSuccess = createAction('[App] Actualizar Categorias Success', props<{data: any}>());
export const updateCategoriasFailure = createAction('[App] Actualizar Categorias Failure', props<{error: any}>());

export const updateTicket = createAction('[App] Actualizar Tickets', props<{ id: number, descripcion: string, fechaLimite: Date, estado: EstadosTicket, categoria: number, user: number }>());
export const updateTicketSuccess = createAction('[App] Actualizar Tickets Success', props<{data: any}>());
export const updateTicketFailure = createAction('[App] Actualizar Tickets Failure', props<{error: any}>());

/**
 * Acciones de eliminar
 */
export const deleteUser = createAction('[App] Eliminar Usuarios', props<{ id: number }>());
export const deleteUserSuccess = createAction('[App] Eliminar Usuarios Success', props<{data: any}>());
export const deleteUserFailure = createAction('[App] Eliminar Usuarios Failure', props<{error: any}>());

export const deleteCategorias = createAction('[App] Eliminar Categorias', props<{ id: number }>());
export const deleteCategoriasSuccess = createAction('[App] Eliminar Categorias Success', props<{data: any}>());
export const deleteCategoriasFailure = createAction('[App] Eliminar Categorias Failure', props<{error: any}>());

export const deleteTickets = createAction('[App] Eliminar Tickets', props<{ id: number }>());
export const deleteTicketsSuccess = createAction('[App] Eliminar Tickets Success', props<{data: any}>());
export const deleteTicketsFailure = createAction('[App] Eliminar Tickets Failure', props<{error: any}>());


/**
 * Acciones de insertar
 */
export const insertUser = createAction('[App] Insertar Usuarios', props<{ username: string, email: string, password: string }>());
export const insertUserSuccess = createAction('[App] Insertar Usuarios Success', props<{data: any}>());
export const insertUserFailure = createAction('[App] Insertar Usuarios Failure', props<{error: any}>());

export const insertCategorias = createAction('[App] Insertar Categorias', props<{ nombre: string, descripcion: string }>());
export const insertCategoriasSuccess = createAction('[App] Insertar Categorias Success', props<{data: any}>());
export const insertCategoriasFailure = createAction('[App] Insertar Categorias Failure', props<{error: any}>());

export const insertTickets = createAction('[App] Insertar Tickets', props<{ descripcion: string, fechaLimite: Date, estado: EstadosTicket, categoria: number, user: number }>());
export const insertTicketsSuccess = createAction('[App] Insertar Tickets Success', props<{data: any}>());
export const insertTicketsFailure = createAction('[App] Insertar Tickets Failure', props<{error: any}>());
