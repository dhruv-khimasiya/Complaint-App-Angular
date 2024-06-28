import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NewComplaintComponent } from './pages/new-complaint/new-complaint.component';
import { ComplaintListComponent } from './pages/complaint-list/complaint-list.component';
import { DepartmentComponent } from './pages/department/department.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'',
    component: LayoutComponent,
    children:[
      {
        path:'dashboard',
        component: DashboardComponent
      },
      {
        path:'new-complaint',
        component: NewComplaintComponent
      },
      {
        path:'complaint-list',
        component: ComplaintListComponent
      },
      {
        path:'deparment',
        component: DepartmentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
