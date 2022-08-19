import { transition } from '@angular/animations';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

// global headers
const options = {
  headers: new HttpHeaders()
}

@Injectable({
  providedIn: 'root'
})

export class DataService {

  // 

  constructor(private http: HttpClient) {
  }



  register(acno: any, password: any, username: any) {
    const data = {
      acno, password, username
    }
    // register api - asynchronus
    return this.http.post('http://localhost:3000/register', data)
  }

  login(acno: any, pswd: any) {
    const data = {
      acno, pswd
    }
    // login api - asynchronus
    return this.http.post('http://localhost:3000/login', data)
  }

  // to get token and attach it to its request header 
  // to get headers with token 
  getOption() {
    //  feach the token from localstorage
    const token = JSON.parse(localStorage.getItem('token') || '')
    // to get header , create an object from HttpHeader
    let headers = new HttpHeaders()
    // append token inside header
    if (token) {
      headers = headers.append('x-access-token', token)
      // implement overloading
      options.headers = headers
    }
    return options
  }

  deposit(acno: any, pswd: any, amt: any) {
    const data = {
      acno, pswd, amt
    }
    // deposit api - asynchronus
    return this.http.post('http://localhost:3000/deposit', data,this.getOption())

  }
  withdraw(acno: any, pswd: any, amt: any) {
    const data = {
      acno, pswd, amt
    }
    // withdraw api - asynchronus
    return this.http.post('http://localhost:3000/withdraw', data,this.getOption())

  }

  getTransaction(acno: any) {
    const data = {
      acno
    }
    // getTransaction api - asynchronus
    return this.http.post('http://localhost:3000/getTransaction', data,this.getOption())
  }


  // delete api
  delete(acno:any){
    return this.http.delete('http://localhost:3000/onDelete/'+acno)

  }

}
