import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { cerrarSesion } from 'src/app/store/actions/auth.actions';
import { AppState } from 'src/app/store/app.store';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  role: string;

  constructor(
    private store: Store<AppState>,
    private authService: AuthService
  ) {
    this.role = this.authService.getCuenta()?.role.type;
  }

  ngOnInit(): void {
  }

  logout() {
    this.store.dispatch(cerrarSesion());
    this.authService.logout();
  }

}
