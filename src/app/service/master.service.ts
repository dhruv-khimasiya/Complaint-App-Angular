import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  apiURL: string = 'https://projectapi.gerasim.in/api/Complaint/';

  constructor(private http: HttpClient) { }

  onLogin(obj:any) {
    // debugger;
    return this.http.post(this.apiURL + 'login', obj);
  }

  onRegister(obj:any) {
    // debugger;
    return this.http.post(`${this.apiURL}AddNewUser`, obj);
  }

  getParentDept() {
    return this.http.get(`${this.apiURL}GetParentDepartment`);
  }

  getChildDepartmentByParentId(id: number) {
    return this.http.get(`${this.apiURL}GetChildDepartmentByParentId?deptId=${id}`);
  }

  createNewComplaint(obj:any) {
    // debugger;
    return this.http.post(`${this.apiURL}CreateNewComplaint`, obj);
  }

  updateNewComplaint(obj:any) {
    // debugger;
    return this.http.post(`${this.apiURL}updateComplaint`, obj);
  }
  
  getAllComplaints() {
    return this.http.get(`${this.apiURL}getAllComplaints`);
  }

  getComplaintsCreatedByUserId(id: number) {
    return this.http.get(`${this.apiURL}getComplaintsCreatedByUserId?userId=${id}`);
  }

  getComplaintStatus() {
    return this.http.get(`${this.apiURL}GetComplaintStatus`);
  }

}
