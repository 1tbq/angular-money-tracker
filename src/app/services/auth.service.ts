import { Injectable, OnInit } from '@angular/core';
import { User } from '../models/user';
import { RestApiService } from './rest-api.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {


  constructor(
    private restService:RestApiService,
    private dataService:DataService,
    private http:HttpClient,
    private router:Router
    ) {
      
      
     }

async ngOnInit(){

}


  login(body:User){
    return this.http.post(`${environment.api_url}/auth/login`,body);
  }

  signup(body:User){
    return this.http.post(`${environment.api_url}/auth/signup`,body);
  }


}
