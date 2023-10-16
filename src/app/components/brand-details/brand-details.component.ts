import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-brand-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brand-details.component.html',
  styleUrls: ['./brand-details.component.scss']
})
export class BrandDetailsComponent implements OnInit{
  constructor(private _ActivatedRoute:ActivatedRoute , private _ProductService:ProductService){}
  brandId:string|null=''
  brandDetails:any=null;
  ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe({
    next:(params)=>{
      this.brandId=params.get('id')
    }
  })

  this._ProductService.getBrandsDetails(this.brandId).subscribe({
    next:(response)=>{
      console.log(response);
      
      this.brandDetails=response.data;
      console.log(this.brandDetails);
      
      
    }
  })
}
}
