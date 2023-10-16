import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-category-details',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss']
})
export class CategoryDetailsComponent implements OnInit{
constructor(private _ActivatedRoute:ActivatedRoute , private _ProductService:ProductService){}
  categoryId:string|null=''
  categoryDetails:any=null;
  ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe({
    next:(params)=>{
      this.categoryId=params.get('id')
    }
  })

  this._ProductService.getCategoryDetails(this.categoryId).subscribe({
    next:(response)=>{
      console.log(response);
      
      this.categoryDetails=response.data;
      console.log(this.categoryDetails);
      
      
    }
  })
}
}
