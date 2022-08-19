import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  // acno=""
  // pswd=""
  // amount=""
  depositForm = this.fb.group({
    acno: ['',[Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['',[Validators.required, Validators.pattern('[0-9]*')]],
    amount: ['', [Validators.required, Validators.pattern('[0-9]*')]]
  })

  // acno1=""
  // pswd1=""
  // amount1=""
  withdrawForm = this.fb.group({
    pswd1: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    acno1: ['',[Validators.required, Validators.pattern('[0-9]*')]],
    amount1: ['', [Validators.required, Validators.pattern('[0-9]*')]]
  })

  user=""

  // acno to child 
  acno:any
 

  lDate:any

  constructor(private ds:DataService,private fb:FormBuilder,private router:Router) { 
    if(localStorage.getItem('currentUsername')){
    this.user=JSON.parse(localStorage.getItem('currentUsername') || '')
    }
    this.lDate = new Date()
  }

  ngOnInit(): void {
    if(!localStorage.getItem('currentacno')){
      alert('please login')
      this.router.navigateByUrl('')
    }
  }
  deposit(){
    var acno=this.depositForm.value.acno
    var pswd=this.depositForm.value.pswd
    var amount=this.depositForm.value.amount
    if(this.depositForm.valid){
      const result=this.ds.deposit(acno,pswd,amount)

      .subscribe((result: any) => {
        if (result) {
          alert(result.message)
        }

      },
        result => {
          alert(result.error.message)
          this.router.navigateByUrl("please login")
        })

    }
    else{
      alert('Invalid form')
    }
  

    
  }
  withdraw(){
    var acno=this.withdrawForm.value.acno1
    var pswd=this.withdrawForm.value.pswd1
    var amount=this.withdrawForm.value.amount1
    if (this.withdrawForm.valid) {
      const result=this.ds.withdraw(acno,pswd,amount)
      .subscribe((result: any) => {
        if (result) {
          alert(result.message)
        }

      },
        result => {
          alert(result.error.message)
          this.router.navigateByUrl("please login")
        })

    }
    else{
      alert('Invalid form')
    }
  }


  logout(){
    localStorage.removeItem('currentacno')
    localStorage.removeItem('currentUsername')
    this.router.navigateByUrl('')
  }


  // delete parant
  deleteParent(){
    this.acno = JSON.parse(localStorage.getItem('currentacno')||'')
    
  }

  // cancel()- to set acno as empty
  cancel(){
    this.acno=""
  }

  onDelete(event:any){
      // asynchronus
      this.ds.delete(event)
      .subscribe(
        (result:any)=>{
          alert(result.message)
          this.logout()
        },
        result=>{
          alert(result.message)
        }
      ) 
  }

}
