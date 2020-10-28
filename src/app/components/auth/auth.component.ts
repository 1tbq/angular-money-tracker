import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  title:string ='';
  authForm:FormGroup;

  

  constructor(
    private fb:FormBuilder,
    private authService:AuthService,
    private router:Router,
    private dataService:DataService
    ) { }

 ngOnInit() {
    this.initForm();
    this.title = this.router.url === '/shop/login'? 'Login':'Signup';
  }

  async onSubmit(){
    if(this.title ==='Signup'){
      this.authService.signup(this.authForm.value)
      .subscribe((data)=>{
        console.log(data);
        if(data['success']){
          localStorage.setItem('jwt_token',data['token']);
          this.dataService.getProfile();
          this.router.navigate(['shop/profile/address'])
          .then(()=>{
            this.dataService.success(
              'Registration successfull please enter shipping address below'
            );
          })
        }
      },error=>this.dataService.error(error));
    }else{
      this.authService.login(this.authForm.value)
      .subscribe((data)=>{
        window.localStorage.setItem('jwt_token',data['token']);
        this.router.navigate(['/shop']);
      },error=>console.log(error));
    }
  }
  
  private initForm(){
    this.authForm = this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    });
  }

}
