import { Component, OnInit, Renderer2, OnChanges, DoCheck } from '@angular/core';
import {ViewChild} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { filter,map } from 'rxjs/operators';
import { Router, ActivationEnd, NavigationStart, NavigationEnd } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent  {
  public isCollapsed = false;
  public shouldShow = false;
  public isShop:boolean;
  isLogedIn:boolean;
  searchTerm ='';
  
  public user:any={  
    local:{
    email:'',
    name:''
    }
  }
  
  @ViewChild("mainNav") mainNav;
  @ViewChild('dropdownLinks') dropdownLinks 

  constructor(
    public authService:AuthService,
    private http:HttpClient,
    private router:Router,
    private dataService:DataService

  ) {
    this.getShopStatus();
    this.getUser();      
    this.dataService.cartItems_quantity = this.dataService.get_products_in_cart().length;
  }

getShopStatus(){
  this.router.events
  .pipe(
    filter(e => (e instanceof ActivationEnd)),
    map(e => e instanceof ActivationEnd ? e.snapshot : {})
  )
  .subscribe(params => {
  let url= params["_routerState"].url;
   url.includes('shop')
   ?this.isShop=true
   :this.isShop=false;  
  //  console.log("this isShop from navbar",this.isShop);
  });
}

getUser(){
 this. router.events.subscribe(event => {
    if(event instanceof NavigationStart) {
      try {
        if(localStorage.getItem('jwt_token')){
          this.isLogedIn = true;
          this.http.get('http://localhost:3030/auth/profile')
          .subscribe(data=>{
            this.user = data["user"];
            console.log('from navbar',this.user);
          });         
          }else{          
              this.user.local.email ="User Actions"
              console.log('no token found');      
            }      
      } catch (error) {
       //this.dataService.error(error['errror']);
       console.log(error);
      }
    }
  
  }); 
}

onLogout(){
  this.dataService.cartItems_quantity = 0;
  localStorage.clear();
  this.isLogedIn = false;
  this.router.navigate(['/home']);  
  }

  //show hide the hamburger icon programactically
  showOrHideManually(){
    this.shouldShow = !this.shouldShow;
    if(this.shouldShow) {
      this.mainNav.nativeElement.classList.add("show");
      this.mainNav.nativeElement.classList.remove("hide");
    } else {
      this.mainNav.nativeElement.classList.add("hide");
      this.mainNav.nativeElement.classList.remove("show");
    }
  }

  showOrHideManuallyLinks(){
     this.shouldShow = !this.shouldShow;
    if(this.shouldShow) {
      this.dropdownLinks.nativeElement.classList.add("show");
      this.dropdownLinks.nativeElement.classList.remove("hide");
    } else {
      this.dropdownLinks.nativeElement.classList.add("hide");
      this.dropdownLinks.nativeElement.classList.remove("show");
    }

  }
  
  search(){
    if(this.searchTerm){
     // this.isCollapsed=true;
      this.router.navigate(['shop/search',{ query: this.searchTerm}]);
    }

  }

}
