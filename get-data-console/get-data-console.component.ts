import { Component, OnInit, ViewChild } from '@angular/core';
import { GetdataService } from '../getdata.service';
import { MatTableDataSource, MatPaginator, PageEvent, MatDialog } from '@angular/material';
import { AddhttpdataComponent } from './addhttpdata/addhttpdata.component';
import { UpdateComponent } from './update/update.component';
export interface CreditType {
  creditCode: string;
  creditName: string;
  creditTypeId: number;
}
export interface Role {
  roleCode: string;
  roleId: number;
  roleName: string;
}
export interface User {
  firstname: string;
  lastname: string;
  login: string;
  roles: Role[];
  userId: number;
}
export interface Department {
  creditType: CreditType;
  deptId: number;
  deptName: string;
  description: string;
  status: number;
  users: User[];
}
export interface RootObject {
  departments: Department[];
}
@Component({
  selector: 'app-get-data-console',
  templateUrl: './get-data-console.component.html',
  styleUrls: ['./get-data-console.component.scss']
})
export class GetDataConsoleComponent implements OnInit {
  users:Department[]=[];
  filteredUsers:Department[]=[];
  dataSource: any;
  length:number;  
  pagedList: Department[]= [];
  displayedColumns: string[] = ['deptId','deptName','description','creditName'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private getservice:GetdataService, private dialog: MatDialog ) { 
    this.GetData1();
  }
  GetData1(){
    this.getservice.GetData().subscribe(
    res=>{
      console.log(res);
      this.users=res['departments'];
      this.OnPageChange({pageIndex:0,pageSize:4});
      console.log(this.users);
      this.dataSource=new MatTableDataSource(this.users);
      this.dataSource.paginator = this.paginator;
    })
  }
  ngOnInit() {   
  }
  OnPageChange(event: any){
    console.log("OnPageChange");
    let index=0;
    let startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if(endIndex > this.length) {
      endIndex = this.length;
    }
    this.filteredUsers=this.users.filter(()=>{
      index++
      return (index > startIndex && index<= endIndex)?true:false;
    })
    // this.filteredUsers = this.users.slice(startIndex, endIndex);   
  }
  getDataFromService(){
    const dialogRef = this.dialog.open(AddhttpdataComponent,{
      width:"300px",
      height:"500px"
    });  
    dialogRef.afterClosed().subscribe(
      result=>
      {
      if(result){
        this.GetData1();
      }
    })    
  }
  updateDepartment(department){
    const dialogRef=this.dialog.open(UpdateComponent,{
      data:department,
      width:'300px'    
    });
    dialogRef.afterClosed().subscribe(result => 
      {
      this.GetData1();
    });
  }
  // delete data
  deleteDepartments(deptId){
    this.getservice.delete(deptId).subscribe(
      res =>{
        for(var i=0;i<this.filteredUsers.length;i++){
          if(this.filteredUsers[i].deptId===deptId){
            this.filteredUsers.splice(i,1);
            console.log(this.filteredUsers);
          }
        }
      }
    )
  }
}