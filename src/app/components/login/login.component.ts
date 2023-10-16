import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormControlOptions, FormGroup, ReactiveFormsModule,Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private _AuthService:AuthService , private _Router:Router){}
  errMessage:string='';
  isLoading :boolean =false ;
  loginForm:FormGroup =new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-z0-9_@]{6,}$/)]),
  });
  
  handleForm():void{
    this.isLoading=true;
    const userData=this.loginForm.value
    if(this.loginForm.valid === true){
      
      this._AuthService.login(userData).subscribe({
        next :(response)=>{
          if(response.message =='success'){
            this.isLoading=false;
            localStorage.setItem('userToken',response.token);
            this._AuthService.decodeUser();
            this._Router.navigate(['/home'])
            
          }
          
        },
        error:(err)=>{
          this.isLoading=false;
          this.errMessage=err.error.message;

          
        }
      })

    }
  }

}
