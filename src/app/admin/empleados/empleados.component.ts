import { Ticket } from './../../../models/Ticket.model';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Empleado } from 'src/models/Empleado.model';
import * as appActions from 'src/app/store/actions/app.actions';
import { AppState } from 'src/app/store/app.store';
import { filter } from 'rxjs/operators';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit, OnDestroy {
  term: any;
  editEmpleado:Empleado[];
  empleados: Empleado[];
  subscripcion: Subscription;
  mostrar=false;
  empleadoinfo: Empleado[];
  tickets: Ticket[];

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.subscripcion = this.store.select('app').subscribe((x) => {
      this.empleados = x.empleados;
    });

    this.store.dispatch(appActions.getUser());
  }

  ngOnDestroy(): void {
    this.subscripcion.unsubscribe();
  }

  borrarRegistro(id:any){
    if (window.confirm("¿Desea eliminar al empleado?")){
    this.store.dispatch(appActions.deleteUser({id}))}
  }
  mostrarInformacion(id:Number){
    this.mostrar=true;
    this.empleadoinfo = this.empleados.filter(empleado => empleado.id == id)
    this.tickets = this.empleadoinfo[0].tickets.filter(filtro => filtro.estado != 'completado')
  
    
  
  }
  
  
}
