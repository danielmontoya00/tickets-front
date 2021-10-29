import { Categoria } from 'src/models/Categoria.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Empleado } from 'src/models/Empleado.model';
import { Store } from '@ngrx/store';
import { EstadosTicket } from 'src/models/Ticket.model';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { AppState } from 'src/app/store/app.store';
import { insertUser } from 'src/app/store/actions/app.actions';

@Component({
  selector: 'app-agregar-empleados',
  templateUrl: './agregar-empleados.component.html',
  styleUrls: ['./agregar-empleados.component.css']
})
export class AgregarEmpleadosComponent implements OnInit {
  addUserForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.addUserForm = this.fb.group({
      user: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required]],
      role: ['']
    });
   
  }
  
  onSubmit(){
    if(this.addUserForm.valid){
      this.store.dispatch(insertUser({
        username: this.addUserForm.value.user,
        email: this.addUserForm.value.email,
        password: this.addUserForm.value.pass,
        role: this.addUserForm.value.role
      }))
      alert("correcto")
    }else {
      console.log(this.addUserForm)} 
  }
}
