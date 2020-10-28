import { 
  UrlTree, 
  ActivatedRouteSnapshot, 
  RouterStateSnapshot, 
  Router, 
  CanActivate 
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

 
    canActivate(
      route: ActivatedRouteSnapshot, 
      state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree  {
   if(window.localStorage.getItem('jws_token')){
     return state.url.startsWith('/profile')?true:(this.router.navigate(['/']),false)
   }else{
     return state.url.startsWith('/profile')?(this.router.navigate(['/']),false):true
   }
  }
 
  constructor(private router:Router) { }
}
