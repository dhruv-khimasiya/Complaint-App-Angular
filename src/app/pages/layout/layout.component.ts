import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  loggedUserData: any;

  router = inject(Router);

  constructor() {
    const localData = localStorage.getItem('complaintUser');
    if (localData != null) {
      this.loggedUserData = JSON.parse(localData);
    }
  }

  onLogOut() {
    localStorage.removeItem('complaintUser');
    this.router.navigateByUrl('/login');
  }
}
