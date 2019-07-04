import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GetdataService } from 'src/app/getdata.service';
import { MatDialog, MatDialogRef } from '@angular/material';
export  interface RootObject1 {
  creditType: CreditType;
  deptName: string;
  description: string;
}
export interface CreditType {
  creditCode: string;
  creditName: string;
  creditTypeId: number;
} 
@Component({
  selector: 'app-addhttpdata',
  templateUrl: './addhttpdata.component.html',
  styleUrls: ['./addhttpdata.component.scss']
})
export class AddhttpdataComponent implements OnInit {
  serviceForm:FormGroup; 
  CredittypeController: any;
  PostDepartment: Object;
  createData:RootObject1;
  constructor(private get:FormBuilder,private getservice:GetdataService,private dialogRef:MatDialogRef<AddhttpdataComponent>) {
    this.postData1();
   }
  ngOnInit() {
    this.serviceForm=this.get.group({
      DepartmentName:[null,[Validators.required]],
      Description:[null,[Validators.required]],
      CreditType:[null,Validators.required]
    })
  }
postData1(){
  this.getservice.getdata().subscribe(
    res =>
    {
    this.CredittypeController=res['creditTypes'];
    console.log(this.CredittypeController);
  })
}
add(){
  this.createData={
    deptName:this.serviceForm.value.DepartmentName,
    description:this.serviceForm.value.Description,
    creditType: {
      creditCode: "",
      creditName: "",
      creditTypeId:this.serviceForm.value.CreditType
    }   
  }
  console.log(JSON.stringify(this.createData)); 
  this.getservice.postData(this.createData).subscribe(result=>{
    console.log(result);
    
    if(result){
      this.dialogRef.close(result);
      console.log(this.createData);
    } 
  })
}
}
