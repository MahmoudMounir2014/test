import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ForgetpassService } from 'src/app/core/services/forgetpass.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
  constructor(private _ForgetpassService:ForgetpassService ,private _Router:Router){}

  step1:boolean =true
  step2:boolean =false
  step3:boolean =false
 email:string=''
 userMassage:string=''
  forgetForm :FormGroup =new FormGroup({
    email: new FormControl('')
  })

  resetCodeForm :FormGroup =new FormGroup({
    resetCode: new FormControl('')
  })
  resetPassword :FormGroup =new FormGroup({
    newPassword :new FormControl('')

  })

forgetPassword():void{
  let userEmail= this.forgetForm.value
  this.email=userEmail.email
 this._ForgetpassService.forgetPassword(userEmail).subscribe({
  next :(response)=>{
    this.userMassage=response.message
    this.step1=false
    this.step2=true
    
  },
  error :(err)=>{
    this.userMassage=err.error.message
  }
 })
}
resetCode(): void {
  let resetCode= this.resetCodeForm.value;
 this._ForgetpassService.resetcode(resetCode).subscribe({
  next :(response)=>{
    this.userMassage=response.status
    this.step2=false
    this.step3=true
    
  },
  error :(err)=>{
    this.userMassage=err.error.message
  }
 })
}
newPassword():void{
  let resetPassword= this.resetPassword.value;
  resetPassword.email =this.email;
 this._ForgetpassService.resetPassword(resetPassword).subscribe({
  next :(response)=>{
    localStorage.setItem('userToken',response.token)
    this._Router.navigate(['/home'])
    
  },
  error :(err)=>{
    this.userMassage=err.error.message
  }
 })
}

}
