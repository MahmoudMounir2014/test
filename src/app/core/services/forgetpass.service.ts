import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgetpassService {
  baseUrl:string=`https://ecommerce.routemisr.com`
  constructor(private _HttpClient:HttpClient) { }
  forgetPassword(userEmail:object):Observable<any>{
    return this._HttpClient.post(this.baseUrl+'/api/v1/auth/forgotPasswords',userEmail)
  }
  resetcode(resetCode:object):Observable<any>{
    return this._HttpClient.post(this.baseUrl+'/api/v1/auth/verifyResetCode',resetCode)

  }
  resetPassword(resetPassword:object):Observable<any>{
    return this._HttpClient.put(this.baseUrl+'/api/v1/auth/resetPassword',resetPassword)
  }

}
