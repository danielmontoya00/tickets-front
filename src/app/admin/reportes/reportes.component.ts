import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/store/app.store';
import { Ticket } from 'src/models/Ticket.model';
import * as appActions from 'src/app/store/actions/app.actions';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
  completos=false;
  asignados=false;
  creados=false;
  tickets: Ticket[];
  ticketsf: Ticket[];
  subscripcion: Subscription;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.subscripcion = this.store.select('app').subscribe((x) => {
      this.tickets = x.tickets;
    });
    this.store.dispatch(appActions.getTickets());
  }

  mostrarInformacion(estado:string){
    console.log(estado)
    if (estado=='completos'){
      this.completos = true;
      this.asignados = false;
      this.creados = false;
      console.log(this.tickets)
      this.ticketsf = this.tickets.filter(ticket => ticket.estado == 'completado');      
    }else if(estado=='asignados'){
      this.completos = false
      this.asignados = true
      this.creados = false
      this.ticketsf = this.tickets.filter(ticket => ticket.estado == 'asignado');     
    }
    else if(estado=='creados'){
      this.completos = false
      this.asignados = false
      this.creados = true
      this.ticketsf = this.tickets.filter(ticket => ticket.estado == 'creado');     
    }
  }
}
