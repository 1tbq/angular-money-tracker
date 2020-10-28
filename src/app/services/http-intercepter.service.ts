import { Injectable } from '@angular/core';
import { 
  HttpInterceptor, 
  HttpRequest, 
  HttpHandler, 
  HttpEvent 
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterService implements HttpInterceptor{
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
   const configHeaders ={
     //'Content-Type':'application/x-www-form-urlencoded',
     //'Accept':'application/json'
   };
   const token = window.localStorage.getItem('jwt_token');
    if(token){
     configHeaders['authorization']= token;
   }
   const _req = req.clone({setHeaders:configHeaders});
 return  next.handle(_req);
  }
}
