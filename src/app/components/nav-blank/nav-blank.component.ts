import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { CartService } from 'src/app/core/services/cart.service';
import { WishlistService } from 'src/app/core/services/wishlist.service';

@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './nav-blank.component.html',
  styleUrls: ['./nav-blank.component.scss']
})
export class NavBlankComponent implements OnInit{
  userInfo:string='';
  cartNumber:number=0;
  wishlistNumber:number=0;
  constructor(private _Renderer2:Renderer2, private _CartService:CartService,private _AuthService:AuthService,private _Router:Router,private _WishlistService:WishlistService){
  }
  @ViewChild('navBar') navElement!:ElementRef;
  @HostListener('window:scroll')
  onScrol():void {
    if(scrollY>500){
      this._Renderer2.addClass(this.navElement.nativeElement,'px-5')
      this._Renderer2.addClass(this.navElement.nativeElement,'shadow')
    }
    else{
      this._Renderer2.removeClass(this.navElement.nativeElement,'px-5')
      this._Renderer2.removeClass(this.navElement.nativeElement,'shadow')
    }
    
  }
  ngOnInit(): void {
    this._CartService.cartNumber.subscribe({
      next :(data)=>{
        this.cartNumber=data
      }
    })
    this._WishlistService.cartNumber.subscribe({
      next :(data)=>{
        this.wishlistNumber=data
      }
    })

    this._AuthService.userInfo.subscribe({
      next :(name)=>{
        this.userInfo=name
      }
    })
    
  
  }
 
  signOut():void{
    localStorage.removeItem('userToken');
    this._Router.navigate(['/login'])
  }

}
