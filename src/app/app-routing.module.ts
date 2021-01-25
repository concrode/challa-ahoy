import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VisitorRegisterComponent} from './visitor/visitor-register/visitor-register.component';
import {VisitorConfirmComponent} from './visitor/visitor-confirm/visitor-confirm.component';
import {VisitorSubmitComponent} from './visitor/visitor-submit/visitor-submit.component';
import { LoginComponent } from './admin/login/login.component';
import { VisitorDataComponent} from './admin/visitor-data/visitor-data.component';
import {ReportComponent } from './admin/report/report.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path: '', 
    component: VisitorRegisterComponent 
  },
  {
    path: 'confirm', 
    component: VisitorConfirmComponent 
  },
  {
    path: 'submit', 
    component: VisitorSubmitComponent
  },
  {
    path: 'login', 
    component: LoginComponent
  },
  {
    path: 'visitorData', 
    component: VisitorDataComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'report', 
    component: ReportComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
