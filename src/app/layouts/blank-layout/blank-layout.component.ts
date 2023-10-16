import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBlankComponent } from 'src/app/components/nav-blank/nav-blank.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-blank-layout',
  standalone: true,
  imports: [CommonModule,NavBlankComponent,RouterOutlet,FooterComponent],
  templateUrl: './blank-layout.component.html',
  styleUrls: ['./blank-layout.component.scss']
})
export class BlankLayoutComponent implements OnInit{
  constructor(private _AuthService:AuthService,private _CartService:CartService){}
  gotoUP():void{
    scrollTo(0,0)
    
  }
ngOnInit(): void {
  this._AuthService.decodeUser();
  this._CartService.getCartUser().subscribe({
    next :(res)=>{
      this._CartService.cartNumber.next(res.numOfCartItems)
    }
  })
}
}
