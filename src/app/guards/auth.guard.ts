import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Router} from '@angular/router';
import { AuthserviceService } from 'src/services/authservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth:AuthserviceService,private router:Router)
  {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {
    if(!this.auth.isLoggedIn())
    {
      this.router.navigate(['login']);
      //return false;
    }
    return this.auth.isLoggedIn();
   
  }
  
}
