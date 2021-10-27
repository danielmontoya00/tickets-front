import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { insertCategorias } from 'src/app/store/actions/app.actions';
import { AppState } from 'src/app/store/app.store';

@Component({
  selector: 'app-agregar-categoria',
  templateUrl: './agregar-categoria.component.html',
  styleUrls: ['./agregar-categoria.component.scss']
})
export class AgregarCategoriaComponent implements OnInit {
  addCatForm: FormGroup;
  constructor(private store: Store<AppState>, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.addCatForm=this.fb.group({
      catNombre: ['',[Validators.required]],
      catDescripcion: ['',[Validators.required]]
    });
  }

  onSubmit(){
    if(this.addCatForm.valid){
      this.store.dispatch(insertCategorias({
        nombre: this.addCatForm.value.catNombre,
        descripcion: this.addCatForm.value.catDescripcion
      }))
    }else{
      console.log(this.addCatForm)
    }
  }

}
