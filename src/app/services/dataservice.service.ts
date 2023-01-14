import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
data:any
trig:any
  constructor(private http:HttpClient) {
  }

  loadproperty(){


    return this.http.get('http://localhost:3000/loadproperty')

  
  }


  addlisting(id:any,title:any,price:any,location:any,details:any){
    this.trig=true;
    const data={
      id,title,price,location,details

    }
    return this.http.post('http://localhost:3000/addlisting',data)
    
  }


  delete(id:any){


    const body={
      id
    }
     return this.http.post('http://localhost:3000/delete',body)
  }
}
