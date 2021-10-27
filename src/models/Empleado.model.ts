import { Ticket } from "./Ticket.model";


export class Empleado {
  id: number;
  username: string;
  email: string;
  blocked: boolean;
  confirmed: boolean;
  tickets: Ticket[];
  role: any;
}
