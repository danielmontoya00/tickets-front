import { ofType } from '@ngrx/effects';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Categoria } from 'src/models/Categoria.model';
import { getCategorias, updateCategorias } from '../store/actions/app.actions';
import { AppState } from '../store/app.store';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.scss']
})
export class EditarCategoriaComponent implements OnInit {
  id: any;
  updateCatForm: FormGroup;
  categorias: Categoria[];
  subscripcion: Subscription;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private activeRoute: ActivatedRoute
  ) {
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.id)
  }


  ngOnInit(): void {
    this.subscripcion = this.store.select('app').subscribe((x) => {
      this.categorias = x.categorias.filter(id => id.id === Number(this.id));
    });
    this.updateCatForm = this.fb.group({
      catNombre: [this.categorias[0].nombre],
      catDescripcion: [this.categorias[0].descripcion]
    });
  }

  ngOnDestroy(): void {
    this.subscripcion.unsubscribe();
  }

  onSubmit() {
    if (this.updateCatForm.valid) {
      this.store.dispatch(updateCategorias({
        id: this.id,
        nombre: this.updateCatForm.value.catNombre,
        descripcion: this.updateCatForm.value.catDescripcion
      }))
    } else {
      console.log(this.updateCatForm)
    }
  }
}
