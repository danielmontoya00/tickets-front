import { Categoria } from './Categoria.model';
import { Empleado } from './Empleado.model';
export type EstadosTicket = 'completado' | 'asignado' | 'creado';

export class Ticket {
  id: number;
  descripcion: string;
  fechaLimite: Date;
  estado: EstadosTicket;
  categoria: Categoria;
  user: Empleado;
}
