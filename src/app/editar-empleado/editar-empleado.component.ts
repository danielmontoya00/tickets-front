import { updateUser } from './../store/actions/app.actions';
import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/models/Empleado.model';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.store';
import * as appActions from 'src/app/store/actions/app.actions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.scss']
})
export class EditarEmpleadoComponent implements OnInit {
  id:any;
  updateUserForm: FormGroup;
  empleados: Empleado[];
  subscripcion: Subscription;


  constructor( 
    private fb: FormBuilder,
    private store: Store<AppState>, 
    private activeRoute:ActivatedRoute) 
    {
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.id)
   }

  ngOnInit(): void {
    this.subscripcion = this.store.select('app').subscribe((x) => {
      this.empleados = x.empleados.filter(id => id.id === Number(this.id));
      console.log(this.empleados)
    });
    this.updateUserForm = this.fb.group({
      user: [this.empleados[0].username],
      email: [this.empleados[0].email],
      pass: ['123456']
    });
  }

  onSubmit(){
    if(this.updateUserForm.valid){
      this.store.dispatch(updateUser({
        id: this.id,
        username: this.updateUserForm.value.user,
        email: this.updateUserForm.value.email,
        password: this.updateUserForm.value.pass,
      }))
      alert("correcto")
    }else {
      console.log(this.updateUserForm)} 
  }
}

