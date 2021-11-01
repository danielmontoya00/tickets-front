import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { login } from 'src/app/store/actions/auth.actions';
import { AppState } from 'src/app/store/app.store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  subscription: Subscription;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      identifier: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });

    this.subscription = this.store.select('auth').pipe(map((x) => x.error)).subscribe(async (x) => {
      if (x) {
        let errorMensaje;

        switch (x.status) {
          case 400:
            errorMensaje = 'Correo o contraseña incorrectos';
            break;
          default:
            errorMensaje = x.error.message || x.error.message[0]?.messages[0]?.message;
            break;
        }

        alert(errorMensaje)
      }
    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }

  onSubmit() {

    if(this.loginForm.valid) {
      this.store.dispatch(login({
        identifier: this.loginForm.value.identifier,
        password: this.loginForm.value.password
      }))
    } else {
      for (const i in this.loginForm.controls) {
        this.loginForm.controls[i].setValue(this.loginForm.controls[i].value);
        this.loginForm.controls[i].markAsTouched();
      }
      // TODO: Enviar alerta de que el formulario no es valido.
    }
  }

}
