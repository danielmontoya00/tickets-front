import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import * as appActions from 'src/app/store/actions/app.actions';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Categoria } from 'src/models/Categoria.model';
import { Empleado } from 'src/models/Empleado.model';
import { AppState } from 'src/app/store/app.store';

@Component({
  selector: 'app-agregar-tickets',
  templateUrl: './agregar-tickets.component.html',
  styleUrls: ['./agregar-tickets.component.scss']
})
export class AgregarTicketsComponent implements OnInit {
  categorias: Categoria[];
  subscripcion: Subscription;
  empleados: Empleado[];
  addTicketForm: FormGroup;
  addCatForm: FormGroup;

  constructor(private store: Store<AppState>, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.subscripcion = this.store.select('app').subscribe((x) => {
      this.categorias = x.categorias;
      this.empleados = x.empleados;
    });
    this.store.dispatch(appActions.getCategorias());
    this.store.dispatch(appActions.getUser());
    this.addTicketForm=this.fb.group({
      descripcion: ['',[Validators.required]],
      date: ['',[Validators.required]],
      estado: ['',[Validators.required]],
      categoria:['',[Validators.required]],
      usr:[]
    });
  }

  ngOnDestroy(): void {
    this.subscripcion.unsubscribe();
  }

  onSubmit(){
    if(this.addTicketForm.valid){
      this.store.dispatch(appActions.insertTickets({
        descripcion: this.addTicketForm.value.descripcion,
        fechaLimite: this.addTicketForm.value.date,
        estado: this.addTicketForm.value.estado,
        categoria: this.addTicketForm.value.categoria,
        user: this.addTicketForm.value.usr
      }))
  }  else{
    console.log(this.addTicketForm)}
  }

  

}
