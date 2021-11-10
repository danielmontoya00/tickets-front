import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/app.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tickets-front';
  loading = false;

  constructor(private store: Store<AppState>) {
    this.store.select('auth').subscribe((x) => { this.loading = x.cargando });
    this.store.select('app').subscribe((x) => { this.loading = x.cargando });
    this.store.select('client').subscribe((x) => { this.loading = x.cargando });
  }
}
