import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  data:any
  
  constructor(private fb:FormBuilder, private ds:DataserviceService,private route:Router) { 

    
    
   
if(this.ds.trig){
  this.loadproperty();
}
    

  }
  

  ngOninit(): void {
    
    
    
  }

 

//  addlisting(){
//  var pid=this.formValue.value.pid
// var pname=this.formValue.value.pname
// var pprice=this.formValue.value.pprice
// var plocation=this.formValue.value.plocation
// var pdetails=this.formValue.value.pdetails

// alert()
// this.ds.addlisting(pid,
//  pname ,
//   pprice,
//  plocation ,
//  pdetails ).subscribe((res:any)=>{
//     alert(res.message)}
//   , res=>{
//     alert(res.error.message)
//    })


// /}


addlisting(id:any,title:any,price:any,location:any,details:any){

    
  this.ds.addlisting(id,title,price,location,details).subscribe((res:any)=>{
    alert(res.message)
  
    
    this.loadproperty()
  }
  )
    }


loadproperty(){
  this.ds.loadproperty().subscribe((res:any)=>{
    this.data=res
  })
}


delete(id:any){
  
  this.ds.delete(id).subscribe(res=>{
    res
  })

  this.loadproperty()
}
}