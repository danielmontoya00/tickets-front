import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Ticket } from '../../models/Ticket.model';
import { AppState } from '../store/app.store';
import { getTickets } from '../store/actions/app.actions';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit, OnDestroy {

  tickets: Ticket[];
  subscription: Subscription;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.subscription = this.store.select('app').subscribe((x) => {
      this.tickets = x.tickets;
    })

    this.store.dispatch(getTickets());
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }

}
