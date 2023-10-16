"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[45],{6286:(p,h,a)=>{a.d(h,{N:()=>v});var d=a(5619),l=a(4769),t=a(9862);let v=(()=>{class o{constructor(i){this._HttpClient=i,this.baseUrl="https://ecommerce.routemisr.com",this.cartNumber=new d.X(0),this.myToken={token:localStorage.getItem("userToken")}}addToCart(i){return this._HttpClient.post(this.baseUrl+"/api/v1/cart",{productId:i},{headers:this.myToken})}getCartUser(){return this._HttpClient.get(this.baseUrl+"/api/v1/cart",{headers:this.myToken})}removeCartItem(i){return this._HttpClient.delete(this.baseUrl+"/api/v1/cart/"+i,{headers:this.myToken})}updataCartItem(i,c){return this._HttpClient.put(this.baseUrl+"/api/v1/cart/"+i,{count:c},{headers:this.myToken})}clearUserCart(){return this._HttpClient.delete(this.baseUrl+"/api/v1/cart",{headers:this.myToken})}checkOut(i,c){return this._HttpClient.post(this.baseUrl+`/api/v1/orders/checkout-session/${i}?url=http://localhost:4200`,{shippingAddress:c},{headers:this.myToken})}static#t=this.\u0275fac=function(c){return new(c||o)(l.LFG(t.eN))};static#e=this.\u0275prov=l.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})()},4045:(p,h,a)=>{a.r(h),a.d(h,{BlankLayoutComponent:()=>b});var d=a(6814),l=a(7163),t=a(4769),v=a(6286),o=a(5881),m=a(9196);const i=["navBar"];function c(r,_){if(1&r&&(t.TgZ(0,"h3",35),t._uU(1),t.qZA()),2&r){const e=t.oxw();t.xp6(1),t.hij("Hello ",e.userInfo,"")}}let g=(()=>{class r{constructor(e,n,s,u,k){this._Renderer2=e,this._CartService=n,this._AuthService=s,this._Router=u,this._WishlistService=k,this.userInfo="",this.cartNumber=0,this.wishlistNumber=0}onScrol(){scrollY>500?(this._Renderer2.addClass(this.navElement.nativeElement,"px-5"),this._Renderer2.addClass(this.navElement.nativeElement,"shadow")):(this._Renderer2.removeClass(this.navElement.nativeElement,"px-5"),this._Renderer2.removeClass(this.navElement.nativeElement,"shadow"))}ngOnInit(){this._CartService.cartNumber.subscribe({next:e=>{this.cartNumber=e}}),this._WishlistService.cartNumber.subscribe({next:e=>{this.wishlistNumber=e}}),this._AuthService.userInfo.subscribe({next:e=>{this.userInfo=e}})}signOut(){localStorage.removeItem("userToken"),this._Router.navigate(["/login"])}static#t=this.\u0275fac=function(n){return new(n||r)(t.Y36(t.Qsj),t.Y36(v.N),t.Y36(o.e),t.Y36(l.F0),t.Y36(m.M))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-nav-blank"]],viewQuery:function(n,s){if(1&n&&t.Gf(i,5),2&n){let u;t.iGM(u=t.CRH())&&(s.navElement=u.first)}},hostBindings:function(n,s){1&n&&t.NdJ("scroll",function(){return s.onScrol()},!1,t.Jf7)},standalone:!0,features:[t.jDz],decls:50,vars:3,consts:[[1,"navbar","navbar-expand-md","navbar-light","bg-light","fixed-top"],["navBar",""],[1,"container-fluid"],["routerLink","",1,"navbar-brand"],["src","./assets/images/freshcart-logo.svg","alt","freshCarLogo"],["type","button","data-bs-toggle","collapse","data-bs-target","#collapsibleNavId","aria-controls","collapsibleNavId","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler","d-lg-none"],[1,"navbar-toggler-icon"],["id","collapsibleNavId",1,"collapse","navbar-collapse"],[1,"navbar-nav","me-auto","mt-2","mt-lg-0"],[1,"nav-item"],["routerLinkActive","active-link","routerLink","/home",1,"nav-link"],["routerLinkActive","active-link","routerLink","/products",1,"nav-link"],["routerLinkActive","active-link","routerLink","/categories",1,"nav-link"],["routerLinkActive","active-link","routerLink","/brands",1,"nav-link"],["class","text-main",4,"ngIf"],[1,"navbar-nav","ms-auto","mt-2","mt-lg-0","align-items-center"],[1,"nav-item","dropdown"],["role","button","data-bs-toggle","dropdown","aria-expanded","false",1,"nav-link","dropdown-toggle"],[1,"fas","fa-user","fa-2x","text-main"],[1,"dropdown-menu"],["role","button","routerLink","/forgetpassword","routerLinkActive","active-link"],[1,"dropdown-item"],["routerLink","/home",1,"nav-link","position-relative"],[1,"fa-solid","fa-heart","fa-2x","text-main"],[1,"badge","bg-info","position-absolute","top-0","end-0"],["routerLink","/cart",1,"nav-link","position-relative"],[1,"fas","fa-cart-shopping","fa-2x","text-main"],[1,"nav-item","d-flex","gap-3","me-3"],[1,"fab","fa-instagram"],[1,"fab","fa-facebook"],[1,"fab","fa-tiktok"],[1,"fab","fa-twitter"],[1,"fab","fa-linkedin"],[1,"fab","fa-youtube"],["role","button",3,"click"],[1,"text-main"]],template:function(n,s){1&n&&(t.TgZ(0,"nav",0,1)(2,"div",2)(3,"a",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"button",5),t._UZ(6,"span",6),t.qZA(),t.TgZ(7,"div",7)(8,"ul",8)(9,"li",9)(10,"a",10),t._uU(11,"Home"),t.qZA()(),t.TgZ(12,"li",9)(13,"a",11),t._uU(14,"Products"),t.qZA()(),t.TgZ(15,"li",9)(16,"a",12),t._uU(17,"Categories"),t.qZA()(),t.TgZ(18,"li",9)(19,"a",13),t._uU(20,"Brands"),t.qZA()()(),t.YNc(21,c,2,1,"h3",14),t.TgZ(22,"ul",15)(23,"li",16)(24,"a",17),t._UZ(25,"i",18),t.qZA(),t.TgZ(26,"ul",19)(27,"li",20)(28,"a",21),t._uU(29,"Forget Password"),t.qZA()()()(),t.TgZ(30,"li",9)(31,"a",22),t._UZ(32,"i",23),t.TgZ(33,"span",24),t._uU(34),t.qZA()()(),t.TgZ(35,"li",9)(36,"a",25),t._UZ(37,"i",26),t.TgZ(38,"span",24),t._uU(39),t.qZA()()(),t.TgZ(40,"li",27),t._UZ(41,"i",28)(42,"i",29)(43,"i",30)(44,"i",31)(45,"i",32)(46,"i",33),t.qZA(),t.TgZ(47,"li",9)(48,"span",34),t.NdJ("click",function(){return s.signOut()}),t._uU(49," SignOut"),t.qZA()()()()()()),2&n&&(t.xp6(21),t.Q6J("ngIf",s.userInfo),t.xp6(13),t.Oqu(s.wishlistNumber),t.xp6(5),t.Oqu(s.cartNumber))},dependencies:[d.ez,d.O5,l.rH,l.Od],styles:["nav[_ngcontent-%COMP%]{transition:padding 1s}"]})}return r})();var f=a(7913);let b=(()=>{class r{constructor(e,n){this._AuthService=e,this._CartService=n}gotoUP(){scrollTo(0,0)}ngOnInit(){this._AuthService.decodeUser(),this._CartService.getCartUser().subscribe({next:e=>{this._CartService.cartNumber.next(e.numOfCartItems)}})}static#t=this.\u0275fac=function(n){return new(n||r)(t.Y36(o.e),t.Y36(v.N))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-blank-layout"]],standalone:!0,features:[t.jDz],decls:6,vars:0,consts:[[1,"container-fluid","main-section"],[1,"btn-up",3,"click"],[1,"fa-solid","fa-arrow-turn-up"]],template:function(n,s){1&n&&(t._UZ(0,"app-nav-blank"),t.TgZ(1,"div",0),t._UZ(2,"router-outlet"),t.qZA(),t._UZ(3,"app-footer"),t.TgZ(4,"button",1),t.NdJ("click",function(){return s.gotoUP()}),t._UZ(5,"i",2),t.qZA())},dependencies:[d.ez,g,l.lC,f.c],styles:["[_nghost-%COMP%]{min-height:100vh;display:flex;flex-direction:column}.main-section[_ngcontent-%COMP%]{padding-top:80px}.btn-up[_ngcontent-%COMP%]{position:fixed;bottom:10px;right:10px;z-index:99;width:40px;height:40px;display:flex;align-items:center;justify-content:center;border-radius:50%;background-color:#0aad0a;border:unset;color:#fff;font-size:20px}"]})}return r})()}}]);