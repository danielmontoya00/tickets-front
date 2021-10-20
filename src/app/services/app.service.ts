import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Categoria } from 'src/models/Categoria.model';
import { Empleado } from 'src/models/Empleado.model';
import { EstadosTicket } from 'src/models/Ticket.model';
import { Ticket } from '../../models/Ticket.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private httpClient: HttpClient
  ) { }

  /**
   * Servicios para obtener
   */

  getUsers() {
    return this.httpClient.get<Empleado[]>(`${environment.servidor}/users`);
  }

  getCategorias() {
    return this.httpClient.get<Categoria[]>(`${environment.servidor}/categorias`);
  }

  getTickets() {
    return this.httpClient.get<Ticket[]>(`${environment.servidor}/tickets`);
  }

  /**
   * Servicios para insertar
   */

  insertUser(username: string, email: string, password: string, role: number) {
    return this.httpClient.post(`${environment.servidor}/users`, {
      username,
      email,
      password,
      role
    });
  }

  insertCategoria(nombre: string, descripcion: string) {
    return this.httpClient.post(`${environment.servidor}/categorias`, {
      nombre,
      descripcion
    });
  }

  insertTickets(descripcion: string, fechaLimite: Date, estado: EstadosTicket, categoria: number, user: number) {
    return this.httpClient.post(`${environment.servidor}/tickets`, {
      descripcion,
      fechaLimite,
      estado,
      categoria,
      user
    });
  }

  /**
   * Servicios para actualizar
   */

  updateUser(id: number, username: string, email: string, password: string) {
    return this.httpClient.post(`${environment.servidor}/users/${id}`, {
      username,
      email,
      password
    });
  }

  updateCategoria(id: number, nombre: string, descripcion: string) {
    return this.httpClient.post(`${environment.servidor}/categorias/${id}`, {
      nombre,
      descripcion
    });
  }

  updateTickets(id: number, descripcion: string, fechaLimite: Date, estado: EstadosTicket, categoria: number, user: number) {
    return this.httpClient.post(`${environment.servidor}/tickets/${id}`, {
      descripcion,
      fechaLimite,
      estado,
      categoria,
      user
    });
  }

  /**
   * Servicios para eliminar
   */

  deleteUser(id: number) {
    return this.httpClient.delete(`${environment.servidor}/users/${id}`);
  }

  deleteCategorias(id: number) {
    return this.httpClient.delete(`${environment.servidor}/categorias/${id}`);
  }

  deleteTickets(id: number) {
    return this.httpClient.delete(`${environment.servidor}/tickets/${id}`);
  }


}
