"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[290],{5290:(v,m,a)=>{a.r(m),a.d(m,{CartComponent:()=>x});var u=a(6814),h=a(7163),t=a(4769),p=a(6286);function _(n,b){if(1&n){const e=t.EpF();t.TgZ(0,"div",11)(1,"div",12),t._UZ(2,"img",13),t.qZA(),t.TgZ(3,"div",14)(4,"div")(5,"h3",15),t._uU(6),t.qZA(),t.TgZ(7,"p",16),t._uU(8),t.ALo(9,"currency"),t.qZA(),t.TgZ(10,"button",17,18),t.NdJ("click",function(){const s=t.CHM(e).$implicit,o=t.MAs(11),d=t.oxw(2);return t.KtG(d.removeItem(s.product._id,o))}),t._UZ(12,"i",19),t._uU(13," Remove"),t.qZA()(),t.TgZ(14,"div")(15,"button",20,21),t.NdJ("click",function(){const s=t.CHM(e).$implicit,o=t.MAs(16),d=t.MAs(21),C=t.oxw(2);return t.KtG(C.changeCount(s.count-1,s.product._id,o,d))}),t._uU(17,"-"),t.qZA(),t.TgZ(18,"span"),t._uU(19),t.qZA(),t.TgZ(20,"button",22,23),t.NdJ("click",function(){const s=t.CHM(e).$implicit,o=t.MAs(16),d=t.MAs(21),C=t.oxw(2);return t.KtG(C.changeCount(s.count+1,s.product._id,o,d))}),t._uU(22,"+"),t.qZA()()()()}if(2&n){const e=b.$implicit;t.xp6(2),t.Q6J("src",e.product.imageCover,t.LSH)("title",e.product.title)("alt",e.product.title),t.xp6(4),t.Oqu(e.product.title),t.xp6(2),t.hij("Price:",t.xi3(9,6,e.price,"EGP "),""),t.xp6(11),t.Oqu(e.count)}}const g=function(n){return["/payment",n]};function c(n,b){if(1&n){const e=t.EpF();t.TgZ(0,"section",2)(1,"div",3)(2,"h1",4),t._uU(3,"Shop Cart"),t.qZA(),t.TgZ(4,"button",5,6),t.NdJ("click",function(){t.CHM(e);const i=t.MAs(5),s=t.oxw();return t.KtG(s.clearCart(i))}),t._uU(6,"Clear Cart"),t.qZA()(),t.TgZ(7,"p",7),t._uU(8),t.ALo(9,"currency"),t.qZA(),t.YNc(10,_,23,9,"div",8),t.TgZ(11,"button",9),t._uU(12,"Online Payment "),t._UZ(13,"img",10),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(8),t.hij("Total Price:",t.xi3(9,3,e.cartDetails.totalCartPrice,"EGP "),""),t.xp6(2),t.Q6J("ngForOf",e.cartDetails.products),t.xp6(1),t.Q6J("routerLink",t.VKq(6,g,e.cartDetails._id))}}function l(n,b){1&n&&(t.TgZ(0,"h2",24),t._uU(1," your Cart is Empty.."),t.qZA())}let x=(()=>{class n{constructor(e,r){this._CartService=e,this._Renderer2=r,this.cartDetails=null}ngOnInit(){this._CartService.getCartUser().subscribe({next:e=>{this.cartDetails=e.data}})}removeItem(e,r){this._Renderer2.setAttribute(r,"disabled","true"),this._CartService.removeCartItem(e).subscribe({next:i=>{this.cartDetails=i.data,this._Renderer2.removeAttribute(r,"disabled"),this._CartService.cartNumber.next(i.numOfCartItems)},error:i=>{this._Renderer2.removeAttribute(r,"disabled")}})}changeCount(e,r,i,s){e>=1?(this._Renderer2.setAttribute(i,"disabled","true"),this._Renderer2.setAttribute(s,"disabled","true"),this._CartService.updataCartItem(r,e).subscribe({next:o=>{this.cartDetails=o.data,this._Renderer2.removeAttribute(i,"disabled"),this._Renderer2.removeAttribute(s,"disabled")},error:o=>{this._Renderer2.removeAttribute(i,"disabled"),this._Renderer2.removeAttribute(s,"disabled")}})):this._CartService.removeCartItem(r).subscribe({next:o=>{this.cartDetails=o.data,this._Renderer2.removeAttribute(i,"disabled"),this._Renderer2.removeAttribute(s,"disabled"),this._CartService.cartNumber.next(o.numOfCartItems)}})}clearCart(e){this._Renderer2.setAttribute(e,"disabled","true"),this._CartService.clearUserCart().subscribe({next:r=>{"success"===r.message&&(this.cartDetails=null,this._CartService.cartNumber.next(0)),this._Renderer2.removeAttribute(e,"disabled")},error:r=>{this._Renderer2.removeAttribute(e,"disabled")}})}static#t=this.\u0275fac=function(r){return new(r||n)(t.Y36(p.N),t.Y36(t.Qsj))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-cart"]],standalone:!0,features:[t.jDz],decls:3,vars:2,consts:[["class","w-75 mx-auto rounded shadow bg-main-light p-3 mb-3",4,"ngIf","ngIfElse"],["msg",""],[1,"w-75","mx-auto","rounded","shadow","bg-main-light","p-3","mb-3"],[1,"d-flex","justify-content-between","align-items-center"],[1,"h2"],[1,"btn","btn-sm","btn-outline-danger",3,"click"],["clearBtn",""],[1,"text-main"],["class","row py-2 border-bottom",4,"ngFor","ngForOf"],[1,"main-btn","mt-3",3,"routerLink"],["src","./assets/images/visa.svg","alt","visa logo"],[1,"row","py-2","border-bottom"],[1,"col-md-1"],[1,"w-100",3,"src","title","alt"],[1,"col-md-11","d-flex","justify-content-between","align-items-center"],[1,"h6"],[1,"text-main","small","mb-0"],[1,"btn","m-0","p-0","text-main",3,"click"],["btnRemove",""],[1,"fas","fa-trash-can"],[1,"btn","btn-sm","border-success","me-1",3,"click"],["plusCount",""],[1,"btn","btn-sm","border-success","ms-1",3,"click"],["minsCount",""],[1,"text-center"]],template:function(r,i){if(1&r&&(t.YNc(0,c,14,8,"section",0),t.YNc(1,l,2,0,"ng-template",null,1,t.W1O)),2&r){const s=t.MAs(2);t.Q6J("ngIf",i.cartDetails)("ngIfElse",s)}},dependencies:[u.ez,u.sg,u.O5,u.H9,h.rH]})}return n})()},6286:(v,m,a)=>{a.d(m,{N:()=>p});var u=a(5619),h=a(4769),t=a(9862);let p=(()=>{class _{constructor(c){this._HttpClient=c,this.baseUrl="https://ecommerce.routemisr.com",this.cartNumber=new u.X(0),this.myToken={token:localStorage.getItem("userToken")}}addToCart(c){return this._HttpClient.post(this.baseUrl+"/api/v1/cart",{productId:c},{headers:this.myToken})}getCartUser(){return this._HttpClient.get(this.baseUrl+"/api/v1/cart",{headers:this.myToken})}removeCartItem(c){return this._HttpClient.delete(this.baseUrl+"/api/v1/cart/"+c,{headers:this.myToken})}updataCartItem(c,l){return this._HttpClient.put(this.baseUrl+"/api/v1/cart/"+c,{count:l},{headers:this.myToken})}clearUserCart(){return this._HttpClient.delete(this.baseUrl+"/api/v1/cart",{headers:this.myToken})}checkOut(c,l){return this._HttpClient.post(this.baseUrl+`/api/v1/orders/checkout-session/${c}?url=http://localhost:4200`,{shippingAddress:l},{headers:this.myToken})}static#t=this.\u0275fac=function(l){return new(l||_)(h.LFG(t.eN))};static#e=this.\u0275prov=h.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"})}return _})()}}]);