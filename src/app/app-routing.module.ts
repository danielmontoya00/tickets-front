import { Categoria } from './../models/Categoria.model';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoUserGuard } from './guards/no-user.guard';
import { AuthorizeGuard } from './guards/authorize.guard';
import { AdminGuard } from './guards/admin.guard';
// import { compileFunction } from 'vm';



const routes: Routes = [
  {
		path: "",
		redirectTo: "auth",
		pathMatch: "full"
	},
	// {
	// 	path: "**",
	// 	redirectTo: "auth",
	// },
  {
    path: 'client',
    loadChildren: () => import('./client/client.module').then(m => m.ClientModule),
    canActivate: [
      AuthorizeGuard
    ]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    canActivate: [
      NoUserGuard
    ]
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [
      AdminGuard
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
