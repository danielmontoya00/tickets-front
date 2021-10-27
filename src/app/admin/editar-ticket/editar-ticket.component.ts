import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Categoria } from 'src/models/Categoria.model';
import { Empleado } from 'src/models/Empleado.model';
import { ActivatedRoute } from '@angular/router';
import { Ticket } from 'src/models/Ticket.model';
import { AppState } from 'src/app/store/app.store';
import { getCategorias, getUser, updateTicket } from 'src/app/store/actions/app.actions';

@Component({
  selector: 'app-editar-ticket',
  templateUrl: './editar-ticket.component.html',
  styleUrls: ['./editar-ticket.component.scss']
})
export class EditarTicketComponent implements OnInit {
  id:any;
  tickets: Ticket[];
  categorias: Categoria[];
  subscripcion: Subscription;
  empleados: Empleado[];
  updateTicketForm: FormGroup;

  constructor(
    private store: Store<AppState>, 
    private fb:FormBuilder,
    private activeRoute: ActivatedRoute
    ) { 
      this.id = this.activeRoute.snapshot.paramMap.get('id');
    }

  ngOnInit(): void {
    this.subscripcion = this.store.select('app').subscribe((x) => {
      this.categorias = x.categorias;
      this.empleados = x.empleados;
      this.tickets = x.tickets.filter(id => id.id === Number(this.id));
    });
    this.store.dispatch(getCategorias());
    this.store.dispatch(getUser());
    console.log(this.tickets[0])
    this.updateTicketForm=this.fb.group({
      descripcion: [this.tickets[0].descripcion],
      date: [this.tickets[0].fechaLimite],
      estado: [this.tickets[0].estado],
      categoria:[this.tickets[0].categoria.id],
      usr:[]
    });
  }

  ngOnDestroy(): void {
    this.subscripcion.unsubscribe();
  }

  onSubmit(){
    if(this.updateTicketForm.valid){
      this.store.dispatch(updateTicket({
        id: this.id,
        descripcion: this.updateTicketForm.value.descripcion,
        fechaLimite: this.updateTicketForm.value.date,
        estado: this.updateTicketForm.value.estado,
        categoria: this.updateTicketForm.value.categoria,
        user: this.updateTicketForm.value.usr
      }))
  }  else{
    console.log(this.updateTicketForm)}
  }

}
function updateTickets(arg0: { descripcion: any; fechaLimite: any; estado: any; categoria: any; user: any; }): any {
  throw new Error('Function not implemented.');
}

