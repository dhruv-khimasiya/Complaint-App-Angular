import { MasterService } from './../../service/master.service';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-new-complaint',
  templateUrl: './new-complaint.component.html',
  styleUrls: ['./new-complaint.component.css']
})
export class NewComplaintComponent implements OnInit {

  masterService = inject(MasterService);
  parentDataList: any [] = [];
  childDeptList: any [] = [];
  parentDeptId: number = 0;
  complaintObj: any = {
    "complaintId": 0,
    "userId": 0,
    "createdDate": new Date(),
    "childDeptId": 0,
    "complaintTitle": "",
    "complaintNo": "",
    "complaintDetails": "",
    "isAlreadyReportedThis": false,
    "oldComplaintNo": "",
    "complaintStatusId": 0
  }

  ngOnInit(): void {
    this.loadParentDept();
    const localData = localStorage.getItem('complaintUser');
    if (localData != null) {
      this.complaintObj.userId = JSON.parse(localData).userId;
    }
  }

  loadParentDept() {
    this.masterService.getParentDept().subscribe((res:any)=>{
      this.parentDataList = res.data;
    }, error=>{

    })
  }

  getChildDept() {
    this.masterService.getChildDepartmentByParentId(this.parentDeptId).subscribe((res:any)=>{
      this.childDeptList = res.data;
    }, error=>{

    })
  }

  onSave() {
    this.masterService.createNewComplaint(this.complaintObj).subscribe((res:any)=>{
      if (res.result) {
        alert("Complaint created successfully!!");
      }
      else {
        alert(res.message);
      }
    }, error=>{

    })
  }
}
