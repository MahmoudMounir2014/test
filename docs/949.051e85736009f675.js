"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[949],{9949:(g,c,a)=>{a.r(c),a.d(c,{CategoryDetailsComponent:()=>e});var n=a(6814),t=a(4769),l=a(7163),i=a(0);function u(r,h){if(1&r&&(t.TgZ(0,"section",1)(1,"div",2)(2,"div",3),t._UZ(3,"img",4),t.qZA(),t.TgZ(4,"div",3)(5,"h2"),t._uU(6),t.qZA()()()()),2&r){const s=t.oxw();t.xp6(3),t.Q6J("src",s.categoryDetails.image,t.LSH)("alt",s.categoryDetails.name),t.xp6(3),t.Oqu(s.categoryDetails.name)}}let e=(()=>{class r{constructor(s,o){this._ActivatedRoute=s,this._ProductService=o,this.categoryId="",this.categoryDetails=null}ngOnInit(){this._ActivatedRoute.paramMap.subscribe({next:s=>{this.categoryId=s.get("id")}}),this._ProductService.getCategoryDetails(this.categoryId).subscribe({next:s=>{console.log(s),this.categoryDetails=s.data,console.log(this.categoryDetails)}})}static#t=this.\u0275fac=function(o){return new(o||r)(t.Y36(l.gz),t.Y36(i.M))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-category-details"]],standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[["class","w-75 mx-auto rounded shadow bg-main-light  py-3 my-4",4,"ngIf"],[1,"w-75","mx-auto","rounded","shadow","bg-main-light","py-3","my-4"],[1,"row","g-4","align-items-center"],[1,"col-md-6"],[1,"w-100",3,"src","alt"]],template:function(o,d){1&o&&t.YNc(0,u,7,3,"section",0),2&o&&t.Q6J("ngIf",d.categoryDetails)},dependencies:[n.ez,n.O5]})}return r})()},0:(g,c,a)=>{a.d(c,{M:()=>l});var n=a(4769),t=a(9862);let l=(()=>{class i{constructor(e){this.HttpClient=e,this.baseUrl="https://ecommerce.routemisr.com/api/v1/"}getProducts(e=1){return this.HttpClient.get(this.baseUrl+`products?page=${e}`)}getProductDetails(e){return this.HttpClient.get(this.baseUrl+"products/"+e)}getCategories(){return this.HttpClient.get(this.baseUrl+"categories")}getCategoryDetails(e){return this.HttpClient.get(this.baseUrl+"categories/"+e)}getBrands(){return this.HttpClient.get(this.baseUrl+"brands")}getBrandsDetails(e){return this.HttpClient.get(this.baseUrl+"brands/"+e)}static#t=this.\u0275fac=function(r){return new(r||i)(n.LFG(t.eN))};static#e=this.\u0275prov=n.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})()}}]);