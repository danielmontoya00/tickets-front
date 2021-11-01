import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { resetPassword } from 'src/app/store/actions/auth.actions';
import { AppState } from 'src/app/store/app.store';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  code: string;

  form: FormGroup;


  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private store: Store<AppState>
  ) {
    this.code = this.route.snapshot.params.code;


    this.form = this.fb.group({
          password: ['', [Validators.required]],
          passwordConfirmation: ['', [Validators.required]],
    });
  }



  onSubmit() {
    if(this.form.valid) {
      this.store.dispatch(resetPassword({
        code: this.code,
        password: this.form.value.password,
        passwordConfirmation: this.form.value.passwordConfirmation
      }));
    } else {
      for (const i in this.form.controls) {
        this.form.controls[i].setValue(this.form.controls[i].value);
        this.form.controls[i].markAsTouched();
      }
    }

  }

  ngOnInit(): void {
  }

}
