import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { AppState } from '../store/app.store';
import { Empleado } from '../../models/Empleado.model';
import { JwtHelperService } from '@auth0/angular-jwt';
import { cerrarSesion, llenarSesion } from '../store/actions/auth.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  auth: boolean = false;

  constructor(
    private http: HttpClient,
    private router: Router,
    private store: Store<AppState>,
  ) { }

  login(identifier: string, password: string) {
    console.log("LOGIN SERVICE")
    return this.http.post<{ user: Empleado, jwt: string }>(`${environment.servidor}/auth/local`, {
      identifier,
      password
    });
  }

  getCuenta(): Empleado | null {
    let usuario = localStorage.getItem('user');
    if (!usuario) {
      this.logout();
      return null;
    }
    let usuarioObj: Empleado;
    usuarioObj = JSON.parse(usuario);
    usuario = Object.setPrototypeOf(usuario, Empleado.prototype);
    return usuarioObj;
  }

  isAuth() {
    const token = localStorage.getItem('token');
    const usuario = localStorage.getItem('user');
    if (!token || !usuario) { // No tiene token
      console.log("NO TIENE TOKEN")
      this.logout();
      return false;
    }

    const helper = new JwtHelperService();
    const isExpired = helper.isTokenExpired(token);

    if (!isExpired) { // Si no está expirado el token
      if (!this.auth) {
        this.store.dispatch(llenarSesion({ user: this.getCuenta() }));
      }
      return true;
    }

    this.logout(); // Token expirado
    return false;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['login'], {
      replaceUrl: true
    });
    this.store.dispatch(cerrarSesion()); // Limpia el store de Auth
  }

  verificarNecesitaLogin() {
    const token = localStorage.getItem('token');
    const usuario = localStorage.getItem('user');
    if (token && usuario) {
      this.router.navigate(['empleados'], {
        replaceUrl: true
      });
      return false;
    }
    return true;
  }
}
