import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import {BehaviorSubject, Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) { }
  userInfo:BehaviorSubject<string> = new BehaviorSubject('');
  userInfo1:any
  baseUrl:string=`https://ecommerce.routemisr.com/api/v1/auth/`
 register(userData:object):Observable<any>{
  return this._HttpClient.post(this.baseUrl+`signup`,userData)
 }
 login(userData:object):Observable<any>{
  return this._HttpClient.post(this.baseUrl+`signin`,userData)
 }
 decodeUser():void{
  const encode =localStorage.getItem('userToken')
  if(encode !== null){
    const decode =jwtDecode(encode);
    this.userInfo1=decode;
    this.userInfo.next(this.userInfo1.name)
    
    
  }
 }
}
