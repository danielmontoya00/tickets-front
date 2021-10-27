import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/models/Categoria.model';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as appActions from 'src/app/store/actions/app.actions';
import { environment } from 'src/environments/environment';
import { AppState } from 'src/app/store/app.store';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {
  term: any;
  categorias: Categoria[];
  subscripcion: Subscription;

  constructor(
    private store: Store<AppState>
    ) { }
    
  ngOnInit(): void {
    this.subscripcion = this.store.select('app').subscribe((x) => {
      this.categorias = x.categorias;
    });
    this.store.dispatch(appActions.getCategorias());
  }


  ngOnDestroy(): void {
    this.subscripcion.unsubscribe();
  }

  borrarRegistro(id:any){
    if (window.confirm("¿Desea eliminar la categoria?")){
    this.store.dispatch(appActions.deleteCategorias({id}))}
  }
}
