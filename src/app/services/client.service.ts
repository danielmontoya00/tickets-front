import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Ticket } from 'src/models/Ticket.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(
    private http: HttpClient,
    private authService: AuthService
    ) { }

  getMyTickets() {
    return this.http.get<Ticket[]>(`${environment.servidor}/tickets?user=${this.authService.getCuenta()?.id}`)
  }

  updateTicket(id: number, estado: string) {
    return this.http.put(`${environment.servidor}/tickets/${id}`, {
      estado
    })
  }
}
