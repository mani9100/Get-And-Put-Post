import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { GetdataService } from 'src/app/getdata.service';
interface RootObject {
  creditType: CreditType;
  deptId: number;
  deptName: string;
  description: string;
  status: number;
  users: User[];
}
interface User {
  firstname: string;
  lastname: string;
  login: string;
  roles: Role[];
  userId: number;
}
interface Role {
  roleCode: string;
  roleId: number;
  roleName: string;
}
interface CreditType {
  creditCode: string;
  creditName: string;
  creditTypeId: number;
}
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  UpdateForm:FormGroup;
  edit;
  updatecontrol: Object;
  constructor( private update:FormBuilder,@Inject(MAT_DIALOG_DATA) public data:RootObject,
  private UpdateService:GetdataService,public dialogRef:MatDialogRef<UpdateComponent>) {
   }
  ngOnInit() {
    this.UpdateForm=this.update.group({
      deptName:[null,Validators.required],
      description:[null,Validators.required],
      creditType:[null,Validators.required],
    });
    if(this.data){
      this.UpdateForm.patchValue(this.data);
      this.UpdateForm.get('creditType').setValue(this.data.creditType.creditTypeId  )
    }
  }
  cancel(){
    this.dialogRef.close();
  }
  Update(){
    this.edit=
    {
      deptName:this.UpdateForm.value.deptName,
      description:this.UpdateForm.value.description,
      deptId:this.data.deptId,
      status:this.data.status,
      users:this.data.users,
      creditType: {
        creditCode: "",
        creditName: "",
        creditTypeId:this.UpdateForm.value.creditType
      }
    }
    console.log(this.edit);
    this.UpdateService.putData(this.edit).subscribe(re=>{
      if(re){
        this.dialogRef.close(this.edit);
      }
    })

    }

  }
  



