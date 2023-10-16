import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/core/services/product.service';
import { Product } from 'src/app/core/interface/product';
import { CuttextPipe } from 'src/app/core/pipe/cuttext.pipe';
import { Category } from 'src/app/core/interface/category';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from 'src/app/core/services/wishlist.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,CuttextPipe,CarouselModule , RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  constructor(
    private _ProductService:ProductService ,
    private _CartService:CartService ,
     private _ToastrService:ToastrService,
     private _Renderer2:Renderer2,
     private _WishlistService:WishlistService,
     ){}
  products:Product[]=[];
  categories:Category[]=[];
  ngOnInit(): void {
    this._ProductService.getProducts().subscribe({
      next :(res)=> {
        
        this.products=res.data;
        
      }
    })
    this._ProductService.getCategories().subscribe({
      next :(res)=>{
        this.categories=res.data
        
      }
    })
    
  }
  addProduct(productId:string ,element:HTMLButtonElement):void{
    this._Renderer2.setAttribute(element,'disabled','true')


    this._CartService.addToCart(productId).subscribe({
      next :(response)=>{
       this._ToastrService.success(response.message)
       this._Renderer2.removeAttribute(element,'disabled')
       
       this._CartService.cartNumber.next(response.numOfCartItems)
      },
      error:(err)=>{
        this._Renderer2.removeAttribute(element,'disabled')
      }
    })
  }

  addToWishList(productId:string ,element:HTMLButtonElement){
    this._Renderer2.removeClass(element,'bg-main')
    this._Renderer2.removeClass(element,'text-main-light')
    this._Renderer2.addClass(element,'text-main')
    this._Renderer2.addClass(element,'bg-main-light')
    this._WishlistService.addToWishlist(productId).subscribe({
      next:(response)=>{
        console.log(response);
        this._WishlistService.cartNumber.next(response.data.length)
        
      },
    })
    
  }
  categoryOptions: OwlOptions = {
    autoplay:true,
    autoplayTimeout:5000,
    autoplaySpeed:1000,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 6
      }
    },
    nav: false
  }
  mainSliderOptions: OwlOptions = {
    autoplay:true,
    autoplayTimeout:5000,
    autoplaySpeed:1000,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
   items :1,
    nav: false
  }
}
