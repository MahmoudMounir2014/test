import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/core/services/product.service';
import { Product } from 'src/app/core/interface/product';
import { RouterLink } from '@angular/router';
import { CuttextPipe } from 'src/app/core/pipe/cuttext.pipe';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,RouterLink,CuttextPipe,NgxPaginationModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  constructor( private _ProductService:ProductService,
    private _CartService:CartService ,
    private _ToastrService:ToastrService,
    private _Renderer2:Renderer2){}

  products:Product[]=[];
  pageSize :number=0;//limit
  currentPage:number=1
  totalItems:number=0
  ngOnInit(): void {
    this._ProductService.getProducts().subscribe({
      next :(res)=> {
       
        this.products=res.data;
        this.pageSize =res.metadata.limit
        this.currentPage=res.metadata.currentPage
        this.totalItems=res.results
        
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

  pageChanged(event:any):void{
    this._ProductService.getProducts(event).subscribe({
      next :(res)=> {
       
        this.products=res.data;
        this.pageSize =res.metadata.limit
        this.currentPage=res.metadata.currentPage
        this.totalItems=res.results
        
      }
    })
  }
}
