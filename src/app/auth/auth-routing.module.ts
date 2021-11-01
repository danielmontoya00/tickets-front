import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RecoverComponent } from './recover/recover.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


const routes: Routes = [
    {
        path: "",
        component: AuthComponent,
        children: [
            {
                path: "login",
                component: LoginComponent,
            },
            {
                path: "recover",
                component: RecoverComponent,
            },
            //27cec2e9ac6b1b80236126650bf3105028c8ca7a2fd4f287654d51bac833ab1a18ac345baa31576101d555bd65fd4c5420c2db99cf7797ccf33d9c4a0937a6bf
            {
                path: "resetPasword/:code",
                component: ResetPasswordComponent,
            },
            {
                path: "",
                redirectTo: "login",
                pathMatch: "full"
            },
            {
                path: "**",
                redirectTo: "login",
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
