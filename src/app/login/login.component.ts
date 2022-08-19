import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // properties / variable

  aim = 'your perfect bankig partner'

  account = 'please enter account numder here'

  // to hold user account numder 

  acno = ""

  // to hold user password

  pswd = ""

  loginForm = this.fb.group({
    acno: ['',[Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['',[Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
  })
  

  userDetails: any = {
    1000: { acno: 1000, username: 'Appu', password: 1000, balance: 5000, transaction: [] },
    1001: { acno: 1001, username: 'Nelu', password: 1001, balance: 6000, transaction: [] },
    1002: { acno: 1002, username: 'Anju', password: 1002, balance: 4000, transaction: [] }

  }

  // constructor - dependency injection 

  constructor(private router:Router,private ds:DataService,private fb:FormBuilder) { }

  // life cycle hook - anglar

  ngOnInit(): void {
  }



  // function login()

  login() {
    var acno = this.loginForm.value.acno
    var pswd = this.loginForm.value.pswd

    // calling dataservice
    if(this.loginForm.valid){
      const result=this.ds.login(acno,pswd)
      .subscribe((result:any) =>{
        if(result){
          localStorage.setItem('currentUsername',JSON.stringify(result.currentUsername))
          localStorage.setItem('currentacno',JSON.stringify(result.currentacno))
          localStorage.setItem('token',JSON.stringify(result.token))
          alert(result.message)
          this.router.navigateByUrl('homepage')
        }
      },
      result =>{
        alert(result.error.message)
      }
      )


    }
    else{
      alert('Invalid Form')
    }

  }


//   // login(a:any,b:any) {

//   //   console.log(a);
    
//   //   var acno = a.value
//   //   var pswd = b.value

//   //   let userDetails = this.userDetails

//   //   if (acno in userDetails) {
//   //     if (pswd == userDetails[acno]['password']) {
//   //       alert('login sucssesfully')
//   //     }
//   //     else {
//   //       alert('incorrect password')
//   //     }
//   //   } else {
//   //     alert('user not exist')
//   //   }
//   // }




}
