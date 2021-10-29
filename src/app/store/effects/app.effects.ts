import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { AppService } from 'src/app/services/app.service';
import { Empleado } from 'src/models/Empleado.model';
import * as appActions from '../actions/app.actions';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppEffects {
  constructor(
    private actions$: Actions,
    private app: AppService,
    private appService: AppService,
    private router: Router
  ) { }

    getUsers$ = createEffect(() => {
      return this.actions$.pipe(
          ofType(appActions.getUser),
          /** An EMPTY observable only emits completion. Replace with your own observable stream */
          switchMap(() => this.appService.getUsers().pipe(
            map(data => appActions.getUserSuccess({ data })),
            catchError(error => of(appActions.getUserFailure({ error })))
          )));
    });

    getTicket$ = createEffect(() => {
      return this.actions$.pipe(
          ofType(appActions.getTickets),
          switchMap(() =>
            this.appService.getTickets().pipe(
              map(data => appActions.getTicketsSuccess({ data })),
              catchError(error => of(appActions.getTicketsFailure({ error }))))
            ),
      );
    });

    getCategoria$ = createEffect(() => {
      return this.actions$.pipe(
          ofType(appActions.getCategorias),
          switchMap(() =>
            this.appService.getCategorias().pipe(
              map(data => appActions.getCategoriasSuccess({ data })),
              catchError(error => of(appActions.getCategoriasFailure({ error }))))
            ),
      );
    });

    updateUser$ = createEffect(() => {
      return this.actions$.pipe(
          ofType(appActions.updateUser),
          switchMap(({id, username, email, password}) =>
            this.appService.updateUser(id, username, email, password).pipe(
              map(data => appActions.updateUserSuccess({ data })),
              tap(() => {
                this.router.navigate(['/admin/empleados']);
              }),
              catchError(error => of(appActions.updateUserFailure({ error }))))
            ),
      );
    });

    updateTicket$ = createEffect(() => {
      return this.actions$.pipe(
          ofType(appActions.updateTicket),
          switchMap(({id, descripcion, fechaLimite, estado, categoria, user}) =>
            this.appService.updateTickets(id, descripcion, fechaLimite, estado, categoria, user).pipe(
              map(data => appActions.updateTicketSuccess({ data })),
              tap(() => {
                this.router.navigate(['/admin/tickets']);
              }),
              catchError(error => of(appActions.updateTicketFailure({ error }))))
            ),
      );
    });

    updateCategoria$ = createEffect(() => {
      return this.actions$.pipe(
          ofType(appActions.updateCategorias),
          switchMap(({id, nombre, descripcion}) =>
            this.appService.updateCategoria(id, nombre, descripcion).pipe(
              map(data => appActions.updateCategoriasSuccess({ data })),
              tap(() => {
                this.router.navigate(['/admin/categorias']);
              }),
              catchError(error => of(appActions.updateCategoriasFailure({ error }))))
            ),
      );
    });

    insertUser$ = createEffect(() => {
      return this.actions$.pipe(
          ofType(appActions.insertUser),
          switchMap(({username, email, password, role}) =>
            this.appService.insertUser(username, email, password, role).pipe(
              map(data => appActions.insertUserSuccess({ data })),
              tap(() => {
                this.router.navigate(['/admin/empleados']);
              }),
              catchError(error => of(appActions.insertUserFailure({ error }))))
            ),
      );
    });

    insertTicket$ = createEffect(() => {
      return this.actions$.pipe(
          ofType(appActions.insertTickets),
          switchMap(({descripcion, fechaLimite, estado, categoria, user}) =>
            this.appService.insertTickets(descripcion, fechaLimite, estado, categoria, user).pipe(
              map(data => appActions.insertTicketsSuccess({ data })),
              tap(() => {
                this.router.navigate(['/admin/tickets']);
              }),
              catchError(error => of(appActions.insertTicketsFailure({ error }))))
            ),
      );
    });

    insertCategoria$ = createEffect(() => {
      return this.actions$.pipe(
          ofType(appActions.insertCategorias),
          switchMap(({nombre, descripcion}) =>
            this.appService.insertCategoria(nombre, descripcion).pipe(
              map(data => appActions.insertCategoriasSuccess({ data })),
              tap(() => {
                this.router.navigate(['/admin/categorias']);
              }),
              catchError(error => of(appActions.insertCategoriasFailure({ error }))))
            ),
      );
    });

    deleteUser$ = createEffect(() => {
      return this.actions$.pipe(
          ofType(appActions.deleteUser),
          switchMap(({id}) =>
            this.appService.deleteUser(id).pipe(
              map(data => appActions.deleteUserSuccess({ data })),
              catchError(error => of(appActions.deleteUserFailure({ error }))))
            ),
      );
    });

    deleteTicket$ = createEffect(() => {
      return this.actions$.pipe(
          ofType(appActions.deleteTickets),
          switchMap(({id}) =>
            this.appService.deleteTickets(id).pipe(
              map(data => appActions.deleteTicketsSuccess({ data })),
              catchError(error => of(appActions.deleteTicketsFailure({ error }))))
            ),
      );
    });

    deleteCategoria$ = createEffect(() => {
      return this.actions$.pipe(
          ofType(appActions.deleteCategorias),
          switchMap(({id}) =>
            this.appService.deleteCategorias(id).pipe(
              map(data => appActions.deleteCategoriasSuccess({ data })),
              catchError(error => of(appActions.deleteCategoriasFailure({ error }))))
            ),
      );
    });
}
