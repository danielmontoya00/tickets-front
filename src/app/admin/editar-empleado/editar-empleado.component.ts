import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/models/Empleado.model';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import * as appActions from 'src/app/store/actions/app.actions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/store/app.store';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.scss']
})
export class EditarEmpleadoComponent implements OnInit {
  id:any;
  updateUserForm: FormGroup;
  empleado: Empleado;
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
      this.empleado = <Empleado>x.empleados.find(id => id.id === Number(this.id));
    });
    this.updateUserForm = this.fb.group({
      user: [this.empleado.username, [Validators.required]],
      email: [this.empleado.email, [Validators.required]],
      pass: ['']
    });
  }

  onSubmit(){
    if(this.updateUserForm.valid){
      if(this.updateUserForm.value.password === '') {
        this.store.dispatch(appActions.updateUser({
          id: this.id,
          username: this.updateUserForm.value.user,
          email: this.updateUserForm.value.email
        }))
      } else {
        this.store.dispatch(appActions.updateUser({
          id: this.id,
          username: this.updateUserForm.value.user,
          email: this.updateUserForm.value.email,
          password: this.updateUserForm.value.pass,
        }))
      }
    }else {
      for (const i in this.updateUserForm.controls) {
        this.updateUserForm.controls[i].setValue(this.updateUserForm.controls[i].value);
        this.updateUserForm.controls[i].markAsTouched();
      }
    }
  }
}

