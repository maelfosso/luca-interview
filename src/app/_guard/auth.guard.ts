import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    console.log('AuthGuard ... Check');

    let connected = JSON.parse(localStorage.getItem("connected"));

    if (connected) {
      console.log('connected');
      return true;
    } else {
      console.log('not connected');
    	this.router.navigate(['/auth/sign-in']);

    	return false;
    }

  }
  
}
