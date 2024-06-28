import { Router } from '@angular/router';
import { MasterService } from './../../service/master.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  masterService = inject(MasterService);
  router = inject(Router);

  registerObj: any = {
    "userId": 0,
    "userName": "",
    "emailId": "",
    "fullName": "",
    "role": "",
    "createdDate": new Date(),
    "password": "",
    "projectName": ""
  }

  loginObj: any = {
    "userName": "",
    "password": ""
  }

  isLoginFormVisible: boolean = true;

  showRegister() {
    this.isLoginFormVisible = false;
  }

  showLogin() {
    this.isLoginFormVisible = true;
  }

  register() {
    // debugger;
    this.masterService.onRegister(this.registerObj).subscribe((res:any)=>{
      // debugger;
      if (res.result) {
        alert('Registration Successful');
      }
      else {
        alert(res.message);
      }
    })
  }

  login() {
    // debugger;
    this.masterService.onLogin(this.loginObj).subscribe((res:any)=>{
      // debugger;
      if (res.result) {
        localStorage.setItem('complaintUser', JSON.stringify(res.data));
        this.router.navigateByUrl('/dashboard');
      }
      else {
        alert(res.message);
      }
    })
  }
}
