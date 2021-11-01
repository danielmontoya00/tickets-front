import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as auth from '../actions/auth.actions';
import * as authActions from '../actions/auth.actions';
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

  recoverPassword$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(auth.recuperarPassword),
        switchMap(({ email }) =>
          this.authService.recuperarPassword(email).pipe(
            map(data => auth.recuperarPasswordSuccess()),
            tap(data => {
              alert("Un correo ha sido enviado a la dirección introducida para recuperar tu contraseña.");

              this.router.navigate(["/auth"], {
                replaceUrl: true
              });
            }),
            catchError(error => of(auth.recuperarPasswordFailure({ error }))))
          ),
    );
  });


  resetPassword$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(authActions.resetPassword),
        switchMap(({ code, password, passwordConfirmation }) =>
          this.authService.resetPassword(code, password, passwordConfirmation).pipe(
            map(data => authActions.resetPasswordSuccess()),
            tap(data => {
              alert("Contraseña actualizada con éxito");
              this.router.navigate(["/auth"], {
                replaceUrl: true
              });
            }),
            catchError(error => of(authActions.resetPasswordFailure({ error }))))
          ),
    );
  });

  resetPasswordFailure$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(authActions.resetPasswordFailure),
        /** An EMPTY observable only emits completion. Replace with your own observable stream */
        tap(() => {
          alert("Hubo un error al reiniciar tu contraseña");

          this.router.navigate(["/auth"], {
            replaceUrl: true
          });
        }));
  }, {
    dispatch: false
  });
}
