import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.store';
import { recuperarPassword } from '../../store/actions/auth.actions';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.scss']
})
export class RecoverComponent implements OnInit {
  recoverForm: FormGroup;

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.recoverForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });


  }

  onSubmit():void {
    if(this.recoverForm.valid) {
      this.store.dispatch(recuperarPassword({
        email: this.recoverForm.value.email
      }));
    } else {
      for (const i in this.recoverForm.controls) {
        this.recoverForm.controls[i].setValue(this.recoverForm.controls[i].value);
        this.recoverForm.controls[i].markAsTouched();
      }
    }
  }

}
