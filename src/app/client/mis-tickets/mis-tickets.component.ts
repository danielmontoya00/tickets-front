import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/store/app.store';
import { Ticket } from 'src/models/Ticket.model';
import { getMyTickets, updateTickets } from '../../store/actions/client.actions';

@Component({
  selector: 'app-mis-tickets',
  templateUrl: './mis-tickets.component.html',
  styleUrls: ['./mis-tickets.component.scss']
})
export class MisTicketsComponent implements OnInit, OnDestroy {
  term: any;
  tickets: Ticket[];
  subscription: Subscription;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.subscription = this.store.select('client').subscribe(x => {
      this.tickets = x.tickets;
    });

    this.store.dispatch(getMyTickets());
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }

  terminarTicket(ticket: Ticket) {
    if(ticket.estado !== 'completado') {
      if(confirm("Estas seguro de cambiar el estatus de este ticket a terminado?")) {
        this.store.dispatch(updateTickets({
          id: ticket.id,
          estado: 'completado'
        }))
      }
    }
  }
}
