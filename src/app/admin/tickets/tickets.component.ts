import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import * as appActions from 'src/app/store/actions/app.actions';
import { AppState } from 'src/app/store/app.store';
import { Ticket } from 'src/models/Ticket.model';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit, OnDestroy {
  term: any;
  tickets: Ticket[];
  subscription: Subscription;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.subscription = this.store.select('app').subscribe((x) => {
      this.tickets = x.tickets;
    })

    this.store.dispatch(appActions.getTickets());
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }

  borrarRegistro(id:any){
    if (window.confirm("¿Desea eliminar el ticket?")){
    this.store.dispatch(appActions.deleteTickets({id}))}
  }
}
