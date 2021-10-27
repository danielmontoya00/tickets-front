import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, tap, catchError } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../../services/client.service';
import * as clientActions from '../actions/client.actions';
import { AppState } from '../app.store';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: "root",
})
export class ClientEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private store: Store<AppState>,
    private clientService: ClientService
  ) {

  }


  getMyTickets$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(clientActions.getMyTickets),
        switchMap(() =>
          this.clientService.getMyTickets().pipe(
            map(data => clientActions.getMyTicketsSuccess({ data })),
            catchError(error => of(clientActions.getMyTicketsFailure({ error }))))
          ),
    );
  });

  updateTicket$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(clientActions.updateTickets),
        switchMap(({ id, estado }) =>
          this.clientService.updateTicket(id, estado).pipe(
            map(data => clientActions.updateTicketsSuccess({ data })),
            tap(data => {
              this.store.dispatch(clientActions.getMyTickets());
            }),
            catchError(error => of(clientActions.updateTicketsFailure({ error }))))
          ),
    );
  });
}
