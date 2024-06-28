import { Component, OnInit, inject } from '@angular/core';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-complaint-list',
  templateUrl: './complaint-list.component.html',
  styleUrls: ['./complaint-list.component.css']
})
export class ComplaintListComponent implements OnInit {
  loggedUserData: any;
  masterService = inject(MasterService);
  complaintList: any [] = [];
  statusList: any [] = [];
  
  complaintObj: any = {}

  ngOnInit(): void {
    debugger
    this.getStatus();
    const localData = localStorage.getItem('complaintUser');
    if (localData != null) {
      this.loggedUserData = JSON.parse(localData);
      if (this.loggedUserData.role == 'admin') {
        this.getAllComplaint();
      }
      else {
        this.getAllComplaintsByUserId(this.loggedUserData.userId);
      }
    }
  }

  getAllComplaint() {
    debugger
    this.masterService.getAllComplaints().subscribe((res:any) => {
      this.complaintList = res.data; 
      console.log(this.complaintList);
    })
  }

  getStatus() {
    debugger
    this.masterService.getComplaintStatus().subscribe((res:any) => {
      this.statusList = res.data; 
    })
  }

  getAllComplaintsByUserId(id: number) {
    debugger
    this.masterService.getComplaintsCreatedByUserId(id).subscribe((res:any) => {
      this.complaintList = res.data;       
    })
  }

  openModal(data: any) {
    this.complaintObj = data;
    const modal = document.getElementById('myModal');
    if (modal != null) {
      modal.style.display = 'block';
    }
  }

  closeModal() {
    const modal = document.getElementById('myModal');
    if (modal != null) {
      modal.style.display = 'none';
    }
  }

  updateComplaint() {
    this.masterService.updateNewComplaint(this.complaintObj).subscribe((res:any) => {
      if (this.loggedUserData.role == 'admin') {
        this.getAllComplaint();
      }
      else {
        this.getAllComplaintsByUserId(this.loggedUserData.userId);
      }
    })
  }
}
