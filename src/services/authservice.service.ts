
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private router:Router) { }
  setToken(token:string)
  {
    localStorage.setItem('token',token)
  }
  getToken()
  {
  localStorage.getItem('token')
  }
 isLoggedIn()
 {
  return this.getToken()!==null;
 }
 logout()
 {
  localStorage.removeItem('token');
  this.router.navigate(['']);
 }
  login({username,password}:any)
  {
    
    if(username==='admin@gmail.com' && password==='test')
    {
      this.setToken('abcdefghijklmnopqrstuvwxyz');
      return of({name:'Urvashi Sapate',email:'admin@gmail.com'})
    }
     return throwError(new Error('Login to failed'))
  }
}

