import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormComponentComponent} from '../app/form-component/form-component.component'
import {DetailComponent} from '../app/detail/detail.component'
import { LoginComponent } from '../app/login/login.component'
import { from } from 'rxjs';


const routes: Routes = [
  {path: "", redirectTo: "/login", pathMatch: "full"},
  {path: "login", component: LoginComponent},
  {path: "form", component: FormComponentComponent},
  {path: "details", component: DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
