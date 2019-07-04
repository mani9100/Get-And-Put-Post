import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  constructor(private http:HttpClient) { }
  data(){
    return this.http.get("http://jsonplaceholder.typicode.com/users");
  }    
  getData1(){
    return this.http.get('http://202.65.158.172:9097/1/all/4'); 
  }
  // postData(Add1){
  //   return this.http.post('http://202.65.158.172:9097/1/create' , Add1);
  // }  
  GetData(){
    return this.http.get("http://202.65.158.172:9093/department/18/active/departments")
  } 
  getdata(){
    return this.http.get('http://202.65.158.172:9093/credittype/1/all')
  } 
  postData(post)   {
    return this.http.post('http://202.65.158.172:9093/department/1/create/18',post);
  } 
  putData(put){
    return this.http.put('http://202.65.158.172:9093/department/1/update/1',put)
  }
  delete(deptId){console.log("delete");
  
    return this.http.delete('http://202.65.158.172:9093/department/18/delete/18',deptId)
  }

}
