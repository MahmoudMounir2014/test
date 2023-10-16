import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from 'src/app/core/services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  constructor(private _CartService:CartService,private _Renderer2:Renderer2){}
  cartDetails:any = null;
  ngOnInit(): void {
    this._CartService.getCartUser().subscribe({
      next:(response)=>{
        this.cartDetails=response.data
        
      }
    })
  }
  removeItem(id:string,btnRemove:HTMLButtonElement):void{
    this._Renderer2.setAttribute(btnRemove,'disabled','true')
    this._CartService.removeCartItem(id).subscribe({
      next:(response)=>{
        this.cartDetails=response.data
        this._Renderer2.removeAttribute(btnRemove,'disabled')
        this._CartService.cartNumber.next(response.numOfCartItems)
        
        
      },
      error:(err)=>{
        this._Renderer2.removeAttribute(btnRemove,'disabled')
      }
    })
  }
  changeCount(count:number,id:string,updateCount1:HTMLButtonElement,updateCount2:HTMLButtonElement):void{
    
    if(count>=1)
    {
      this._Renderer2.setAttribute(updateCount1,'disabled','true')
      this._Renderer2.setAttribute(updateCount2,'disabled','true')

      this._CartService.updataCartItem(id,count).subscribe({
        next :(response)=>{
          this.cartDetails=response.data
          this._Renderer2.removeAttribute(updateCount1,'disabled')
          this._Renderer2.removeAttribute(updateCount2,'disabled')
          
        },
        error:(err)=>{
          this._Renderer2.removeAttribute(updateCount1,'disabled')
          this._Renderer2.removeAttribute(updateCount2,'disabled')
        }
      })
    }else
    {
      this._CartService.removeCartItem(id).subscribe({
        next:(response)=>{
          this.cartDetails=response.data
          this._Renderer2.removeAttribute(updateCount1,'disabled')
          this._Renderer2.removeAttribute(updateCount2,'disabled')
          this._CartService.cartNumber.next(response.numOfCartItems)
          
          
        }
      })
    }
   
    
  }
  clearCart(clearBtn:HTMLButtonElement):void{
    this._Renderer2.setAttribute(clearBtn,'disabled','true')
    this._CartService.clearUserCart().subscribe({
      next:(response)=>{
        if(response.message ==="success" ){
          this.cartDetails=null
          this._CartService.cartNumber.next(0)
        }
        this._Renderer2.removeAttribute(clearBtn,'disabled')
        
        
      },
      error:(err)=>{
        this._Renderer2.removeAttribute(clearBtn,'disabled')
      }
    })
  }
  

}
