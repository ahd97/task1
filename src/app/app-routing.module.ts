import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormComponentComponent} from '../app/form-component/form-component.component'
import {DetailComponent} from '../app/detail/detail.component'
import { from } from 'rxjs';


const routes: Routes = [
  {path: "", redirectTo: "/form", pathMatch: "full"},
  {path: "form", component: FormComponentComponent},
  {path: "details", component: DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
