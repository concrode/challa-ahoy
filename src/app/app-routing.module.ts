import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VisitorRegisterComponent} from './visitor/visitor-register/visitor-register.component';
import {VisitorConfirmComponent} from './visitor/visitor-confirm/visitor-confirm.component';
import {VisitorSubmitComponent} from './visitor/visitor-submit/visitor-submit.component'



const routes: Routes = [
  {path: '', component: VisitorRegisterComponent },
  {path: 'confirm', component: VisitorConfirmComponent },
  {path: 'submit', component: VisitorSubmitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
