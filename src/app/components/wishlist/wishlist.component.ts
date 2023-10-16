import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { WishlistService } from 'src/app/core/services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit{
  constructor( private _WishlistService:WishlistService){}
  wishlistData:any = null;
  ngOnInit(): void {
    this._WishlistService.getUserWishlist().subscribe({
      next:(response)=>{
        console.log(response);
        
      }
    })
  }
  removeWishlistItem(id:string):void{
    
    this._WishlistService.removeWishlistItem(id).subscribe({
      next:(response)=>{
        console.log(response);
        
       // this.wishlistData=response.data
      //  this._WishlistService.cartNumber.next(response.numOfCartItems)
        
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }

}
