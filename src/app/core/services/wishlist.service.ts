import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private _HttpClient:HttpClient) { }
  baseUrl:string=`https://ecommerce.routemisr.com/api/v1/wishlist`
  cartNumber:BehaviorSubject<number> = new BehaviorSubject(0);
  myToken:any={
    token : localStorage.getItem('userToken') 
  }
  getUserWishlist():Observable<any>{
    return this._HttpClient.get(this.baseUrl,
    {
      headers:this.myToken
    }
    )
  }
  addToWishlist(wishListtId:string):Observable<any>{
    return this._HttpClient.post(this.baseUrl,
    {
      productId: wishListtId
    },
    {
      headers :this.myToken
    }
    )
  }
  
  removeWishlistItem(id:string|null):Observable<any>{
    return this._HttpClient.delete(this.baseUrl +'/'+id,
    {
      headers:this.myToken
    }
    );
  }
}
