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
                alert("Usuario editado con éxito");
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
                alert("Ticket editado con éxito");
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
                alert("Categoria editada con éxito");
              }),
              catchError(error => of(appActions.updateCategoriasFailure({ error }))))
            ),
      );
    });

    updateCategoriaFailure$ = createEffect(() => {
      return this.actions$.pipe(
          ofType(appActions.updateCategoriasFailure),
          /** An EMPTY observable only emits completion. Replace with your own observable stream */
          tap(() => {
            alert("Ya existe una categoria con este nombre");
          }));
    }, { dispatch: false });

    insertUser$ = createEffect(() => {
      return this.actions$.pipe(
          ofType(appActions.insertUser),
          switchMap(({username, email, password, role}) =>
            this.appService.insertUser(username, email, password, role).pipe(
              map(data => appActions.insertUserSuccess({ data })),
              tap(() => {
                this.router.navigate(['/admin/empleados']);
                alert("Usuario insertado con éxito");
              }),
              catchError(error => of(appActions.insertUserFailure({ error }))))
            ),
      );
    });

    insertUserFailure$ = createEffect(() => {
      return this.actions$.pipe(
          ofType(appActions.insertUserFailure),
          /** An EMPTY observable only emits completion. Replace with your own observable stream */
          tap((e: any) => {
            switch(e.error.error.message[0].messages[0].id) {
              case 'Auth.form.error.email.taken':
                alert("Ya existe un usuario con este email");
              break;
              default:
                alert(e.error.error.message[0].messages[0].message);
                break;
            }
          }));
    }, { dispatch: false });

    insertTicket$ = createEffect(() => {
      return this.actions$.pipe(
          ofType(appActions.insertTickets),
          switchMap(({descripcion, fechaLimite, estado, categoria, user}) =>
            this.appService.insertTickets(descripcion, fechaLimite, estado, categoria, user).pipe(
              map(data => appActions.insertTicketsSuccess({ data })),
              tap(() => {
                this.router.navigate(['/admin/tickets']);
                alert("Ticket insertado con éxito");
              }),
              catchError(error => of(appActions.insertTicketsFailure({ error }))))
            ),
      );
    });

    insertTicketFailure$ = createEffect(() => {
      return this.actions$.pipe(
          ofType(appActions.insertTicketsFailure),
          /** An EMPTY observable only emits completion. Replace with your own observable stream */
          tap((x) => {
            alert("El usuario ya tiene dos tickets asignados sin completar.");
          }));
    }, {
      dispatch: false
    });

    insertCategoria$ = createEffect(() => {
      return this.actions$.pipe(
          ofType(appActions.insertCategorias),
          switchMap(({nombre, descripcion}) =>
            this.appService.insertCategoria(nombre, descripcion).pipe(
              map(data => appActions.insertCategoriasSuccess({ data })),
              tap(() => {
                this.router.navigate(['/admin/categorias']);
                alert("Categoria insertada con éxito");
              }),
              catchError(error => of(appActions.insertCategoriasFailure({ error }))))
            ),
      );
    });

    insertCategoriaFailure$ = createEffect(() => {
      return this.actions$.pipe(
          ofType(appActions.insertCategoriasFailure),
          /** An EMPTY observable only emits completion. Replace with your own observable stream */
          tap(() => {
            alert("Ya existe una categoria con este nombre");
          }));
    }, { dispatch: false });

    deleteUser$ = createEffect(() => {
      return this.actions$.pipe(
          ofType(appActions.deleteUser),
          switchMap(({id}) =>
            this.appService.deleteUser(id).pipe(
              map(data => {
                alert("Usuario eliminado con éxito");
                return appActions.deleteUserSuccess({ data })
              }),
              catchError(error => of(appActions.deleteUserFailure({ error }))))
            ),
      );
    });

    deleteTicket$ = createEffect(() => {
      return this.actions$.pipe(
          ofType(appActions.deleteTickets),
          switchMap(({id}) =>
            this.appService.deleteTickets(id).pipe(
              map(data => {alert("Ticket eliminado con éxito"); return appActions.deleteTicketsSuccess({ data })}),
              catchError(error => of(appActions.deleteTicketsFailure({ error }))))
            ),
      );
    });

    deleteCategoria$ = createEffect(() => {
      return this.actions$.pipe(
          ofType(appActions.deleteCategorias),
          switchMap(({id}) =>
            this.appService.deleteCategorias(id).pipe(
              map(data => {alert("Categoria eliminada con éxito"); return appActions.deleteCategoriasSuccess({ data })}),
              catchError(error => of(appActions.deleteCategoriasFailure({ error }))))
            ),
      );
    });
}
