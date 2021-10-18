import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { login } from '../store/actions/auth.actions';
import { AppState } from '../store/app.store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      identifier: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {

    if(this.loginForm.valid) {
      console.log("DISPATCH")
      this.store.dispatch(login({
        identifier: this.loginForm.value.identifier,
        password: this.loginForm.value.password
      }))
    } else {
      console.log(this.loginForm)
      // TODO: Enviar alerta de que el formulario no es valido.
    }
  }

}
