import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  baseUrl:string=`https://ecommerce.routemisr.com`
  cartNumber:BehaviorSubject<number> = new BehaviorSubject(0);
  myToken:any={
    token : localStorage.getItem('userToken') 
  }

  constructor(private _HttpClient:HttpClient) { }


  addToCart(prodtId:string):Observable<any>{
    return this._HttpClient.post(this.baseUrl+`/api/v1/cart`,
    {
      productId: prodtId
    },
    {
      headers :this.myToken
    }
    )
  }
  getCartUser():Observable<any>{
    return this._HttpClient.get(this.baseUrl+'/api/v1/cart',
    {
      headers:this.myToken
    }
    )
  }
  removeCartItem(id:string|null):Observable<any>{
    return this._HttpClient.delete(this.baseUrl +'/api/v1/cart/'+id,
    {
      headers:this.myToken
    }
    );
  }
  updataCartItem(id:string|null,countUpdated:number):Observable<any>{
    return this._HttpClient.put(this.baseUrl +'/api/v1/cart/'+id,
    {
      count: countUpdated
    },
    {
      headers:this.myToken
    }
    );
  }
  clearUserCart():Observable<any>{
    return this._HttpClient.delete(this.baseUrl +'/api/v1/cart',{
      headers :this.myToken
    })
  }
  checkOut(cartId:string|null ,orderInfo:object):Observable<any>{
    return this._HttpClient.post(this.baseUrl +
      `/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,
    {
      shippingAddress:orderInfo
    },
    {
      headers :this.myToken
    }
  )
  }
}
