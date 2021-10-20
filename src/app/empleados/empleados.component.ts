import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Empleado } from 'src/models/Empleado.model';
import { AppState } from '../store/app.store';
import * as appActions from 'src/app/store/actions/app.actions';
import { getUser } from '../store/actions/app.actions';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit, OnDestroy {

  empleados: Empleado[];
  subscripcion: Subscription;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.subscripcion = this.store.select('app').subscribe((x) => {
      this.empleados = x.empleados;
    });

    this.store.dispatch(getUser());
  }

  ngOnDestroy(): void {
    this.subscripcion.unsubscribe();
  }

  borrarRegistro(id:any){
    if(confirm("Desea eliminar este registro?")){
      this.store.dispatch(appActions.deleteUser({id}))
    }
  }
}
