import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as auth from '../actions/auth.actions';
import { switchMap, map, tap, catchError } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: "root",
})
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {

  }

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(auth.login),
      /** An EMPTY observable only emits completion. Replace with your own observable stream */
      switchMap(({ identifier, password }) => this.authService.login(identifier, password).pipe(
        map(({ user, jwt }) => {
          localStorage.setItem('token', jwt);
          localStorage.setItem('user', JSON.stringify(user));

          switch(user.role.type) {
            case 'empleado':
              this.router.navigate(["/client"], {
                replaceUrl: true
              });
              break;
            case 'authenticated':
              this.router.navigate(["/admin"], {
                replaceUrl: true
              });
              break;
          }
          
          return auth.loginSuccess({ user, token: jwt })
        }),
        catchError((error) => {
          console.error(error);
          return of(auth.loginFailure({ error }));
        })
      )));
  });
}
