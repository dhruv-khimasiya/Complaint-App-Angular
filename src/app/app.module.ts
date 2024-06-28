import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { ComplaintListComponent } from './pages/complaint-list/complaint-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DepartmentComponent } from './pages/department/department.component';
import { NewComplaintComponent } from './pages/new-complaint/new-complaint.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    ComplaintListComponent,
    DashboardComponent,
    DepartmentComponent,
    NewComplaintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
