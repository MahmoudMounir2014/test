"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[188],{2188:(y,f,l)=>{l.r(f),l.d(f,{ProductsComponent:()=>j});var p=l(6814),x=l(7163),b=l(8129),e=l(4769);function _(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"a",12),e.NdJ("keyup.enter",function(){e.CHM(t),e.oxw(3);const r=e.MAs(1);return e.KtG(r.previous())})("click",function(){e.CHM(t),e.oxw(3);const r=e.MAs(1);return e.KtG(r.previous())}),e._uU(1),e.TgZ(2,"span",13),e._uU(3),e.qZA()()}if(2&i){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.previousLabel," "),e.xp6(2),e.Oqu(t.screenReaderPageLabel)}}function u(i,a){if(1&i&&(e.TgZ(0,"span",14),e._uU(1),e.TgZ(2,"span",13),e._uU(3),e.qZA()()),2&i){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.previousLabel," "),e.xp6(2),e.Oqu(t.screenReaderPageLabel)}}function c(i,a){if(1&i&&(e.TgZ(0,"li",9),e.YNc(1,_,4,2,"a",10),e.YNc(2,u,4,2,"span",11),e.qZA()),2&i){e.oxw(2);const t=e.MAs(1);e.ekj("disabled",t.isFirstPage()),e.xp6(1),e.Q6J("ngIf",1<t.getCurrent()),e.xp6(1),e.Q6J("ngIf",t.isFirstPage())}}function m(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"a",12),e.NdJ("keyup.enter",function(){e.CHM(t);const r=e.oxw().$implicit;e.oxw(2);const s=e.MAs(1);return e.KtG(s.setCurrent(r.value))})("click",function(){e.CHM(t);const r=e.oxw().$implicit;e.oxw(2);const s=e.MAs(1);return e.KtG(s.setCurrent(r.value))}),e.TgZ(1,"span",13),e._uU(2),e.qZA(),e.TgZ(3,"span"),e._uU(4),e.ALo(5,"number"),e.qZA()()}if(2&i){const t=e.oxw().$implicit,n=e.oxw(2);e.xp6(2),e.hij("",n.screenReaderPageLabel," "),e.xp6(2),e.Oqu("..."===t.label?t.label:e.xi3(5,2,t.label,""))}}function M(i,a){if(1&i&&(e.ynx(0),e.TgZ(1,"span",16)(2,"span",13),e._uU(3),e.qZA(),e.TgZ(4,"span"),e._uU(5),e.ALo(6,"number"),e.qZA()(),e.BQk()),2&i){const t=e.oxw().$implicit,n=e.oxw(2);e.xp6(3),e.hij("",n.screenReaderCurrentLabel," "),e.xp6(2),e.Oqu("..."===t.label?t.label:e.xi3(6,2,t.label,""))}}function w(i,a){if(1&i&&(e.TgZ(0,"li"),e.YNc(1,m,6,5,"a",10),e.YNc(2,M,7,5,"ng-container",15),e.qZA()),2&i){const t=a.$implicit;e.oxw(2);const n=e.MAs(1);e.ekj("current",n.getCurrent()===t.value)("ellipsis","..."===t.label),e.xp6(1),e.Q6J("ngIf",n.getCurrent()!==t.value),e.xp6(1),e.Q6J("ngIf",n.getCurrent()===t.value)}}function Z(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"a",12),e.NdJ("keyup.enter",function(){e.CHM(t),e.oxw(3);const r=e.MAs(1);return e.KtG(r.next())})("click",function(){e.CHM(t),e.oxw(3);const r=e.MAs(1);return e.KtG(r.next())}),e._uU(1),e.TgZ(2,"span",13),e._uU(3),e.qZA()()}if(2&i){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.nextLabel," "),e.xp6(2),e.Oqu(t.screenReaderPageLabel)}}function U(i,a){if(1&i&&(e.TgZ(0,"span",14),e._uU(1),e.TgZ(2,"span",13),e._uU(3),e.qZA()()),2&i){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.nextLabel," "),e.xp6(2),e.Oqu(t.screenReaderPageLabel)}}function D(i,a){if(1&i&&(e.TgZ(0,"li",17),e.YNc(1,Z,4,2,"a",10),e.YNc(2,U,4,2,"span",11),e.qZA()),2&i){e.oxw(2);const t=e.MAs(1);e.ekj("disabled",t.isLastPage()),e.xp6(1),e.Q6J("ngIf",!t.isLastPage()),e.xp6(1),e.Q6J("ngIf",t.isLastPage())}}function E(i,a){if(1&i&&(e.TgZ(0,"ul",4),e.YNc(1,c,3,4,"li",5),e.TgZ(2,"li",6),e._uU(3),e.qZA(),e.YNc(4,w,3,6,"li",7),e.YNc(5,D,3,4,"li",8),e.qZA()),2&i){const t=e.oxw(),n=e.MAs(1);e.ekj("responsive",t.responsive),e.xp6(1),e.Q6J("ngIf",t.directionLinks),e.xp6(2),e.AsE(" ",n.getCurrent()," / ",n.getLastPage()," "),e.xp6(1),e.Q6J("ngForOf",n.pages)("ngForTrackBy",t.trackByIndex),e.xp6(1),e.Q6J("ngIf",t.directionLinks)}}class L{constructor(){this.change=new e.vpe,this.instances={},this.DEFAULT_ID="DEFAULT_PAGINATION_ID"}defaultId(){return this.DEFAULT_ID}register(a){return null==a.id&&(a.id=this.DEFAULT_ID),this.instances[a.id]?this.updateInstance(a):(this.instances[a.id]=a,!0)}updateInstance(a){let t=!1;for(let n in this.instances[a.id])a[n]!==this.instances[a.id][n]&&(this.instances[a.id][n]=a[n],t=!0);return t}getCurrentPage(a){return this.instances[a]?this.instances[a].currentPage:1}setCurrentPage(a,t){if(this.instances[a]){let n=this.instances[a];t<=Math.ceil(n.totalItems/n.itemsPerPage)&&1<=t&&(this.instances[a].currentPage=t,this.change.emit(a))}}setTotalItems(a,t){this.instances[a]&&0<=t&&(this.instances[a].totalItems=t,this.change.emit(a))}setItemsPerPage(a,t){this.instances[a]&&(this.instances[a].itemsPerPage=t,this.change.emit(a))}getInstance(a=this.DEFAULT_ID){return this.instances[a]?this.clone(this.instances[a]):{}}clone(a){var t={};for(var n in a)a.hasOwnProperty(n)&&(t[n]=a[n]);return t}}const O=Number.MAX_SAFE_INTEGER;let S=(()=>{class i{constructor(t){this.service=t,this.state={}}transform(t,n){if(!(t instanceof Array)){let C=n.id||this.service.defaultId();return this.state[C]?this.state[C].slice:t}let g,d,r=n.totalItems&&n.totalItems!==t.length,s=this.createInstance(t,n),o=s.id,h=s.itemsPerPage,v=this.service.register(s);if(!r&&t instanceof Array){if(h=+h||O,g=(s.currentPage-1)*h,d=g+h,this.stateIsIdentical(o,t,g,d))return this.state[o].slice;{let I=t.slice(g,d);return this.saveState(o,t,I,g,d),this.service.change.emit(o),I}}return v&&this.service.change.emit(o),this.saveState(o,t,t,g,d),t}createInstance(t,n){return this.checkConfig(n),{id:null!=n.id?n.id:this.service.defaultId(),itemsPerPage:+n.itemsPerPage||0,currentPage:+n.currentPage||1,totalItems:+n.totalItems||t.length}}checkConfig(t){const r=["itemsPerPage","currentPage"].filter(s=>!(s in t));if(0<r.length)throw new Error(`PaginatePipe: Argument is missing the following required properties: ${r.join(", ")}`)}saveState(t,n,r,s,o){this.state[t]={collection:n,size:n.length,slice:r,start:s,end:o}}stateIsIdentical(t,n,r,s){let o=this.state[t];return!(!o||o.size!==n.length||o.start!==r||o.end!==s)&&o.slice.every((d,h)=>d===n[r+h])}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(L,16))},i.\u0275pipe=e.Yjl({name:"paginate",type:i,pure:!1}),i})(),N=(()=>{class i{constructor(t,n){this.service=t,this.changeDetectorRef=n,this.maxSize=7,this.pageChange=new e.vpe,this.pageBoundsCorrection=new e.vpe,this.pages=[],this.changeSub=this.service.change.subscribe(r=>{this.id===r&&(this.updatePageLinks(),this.changeDetectorRef.markForCheck(),this.changeDetectorRef.detectChanges())})}ngOnInit(){void 0===this.id&&(this.id=this.service.defaultId()),this.updatePageLinks()}ngOnChanges(t){this.updatePageLinks()}ngOnDestroy(){this.changeSub.unsubscribe()}previous(){this.checkValidId(),this.setCurrent(this.getCurrent()-1)}next(){this.checkValidId(),this.setCurrent(this.getCurrent()+1)}isFirstPage(){return 1===this.getCurrent()}isLastPage(){return this.getLastPage()===this.getCurrent()}setCurrent(t){this.pageChange.emit(t)}getCurrent(){return this.service.getCurrentPage(this.id)}getLastPage(){let t=this.service.getInstance(this.id);return t.totalItems<1?1:Math.ceil(t.totalItems/t.itemsPerPage)}getTotalItems(){return this.service.getInstance(this.id).totalItems}checkValidId(){null==this.service.getInstance(this.id).id&&console.warn(`PaginationControlsDirective: the specified id "${this.id}" does not match any registered PaginationInstance`)}updatePageLinks(){let t=this.service.getInstance(this.id);const n=this.outOfBoundCorrection(t);n!==t.currentPage?setTimeout(()=>{this.pageBoundsCorrection.emit(n),this.pages=this.createPageArray(t.currentPage,t.itemsPerPage,t.totalItems,this.maxSize)}):this.pages=this.createPageArray(t.currentPage,t.itemsPerPage,t.totalItems,this.maxSize)}outOfBoundCorrection(t){const n=Math.ceil(t.totalItems/t.itemsPerPage);return n<t.currentPage&&0<n?n:t.currentPage<1?1:t.currentPage}createPageArray(t,n,r,s){s=+s;let o=[];const g=Math.max(Math.ceil(r/n),1),d=Math.ceil(s/2),h=t<=d,v=g-d<t,C=!h&&!v;let I=s<g,P=1;for(;P<=g&&P<=s;){let k,A=this.calculatePageNumber(P,t,s,g);k=I&&(2===P&&(C||v)||P===s-1&&(C||h))?"...":A,o.push({label:k,value:A}),P++}return o}calculatePageNumber(t,n,r,s){let o=Math.ceil(r/2);return t===r?s:1===t?t:r<s?s-o<n?s-r+t:o<n?n-o+t:t:t}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(L),e.Y36(e.sBO))},i.\u0275dir=e.lG2({type:i,selectors:[["pagination-template"],["","pagination-template",""]],inputs:{id:"id",maxSize:"maxSize"},outputs:{pageChange:"pageChange",pageBoundsCorrection:"pageBoundsCorrection"},exportAs:["paginationApi"],features:[e.TTD]}),i})();function T(i){return!!i&&"false"!==i}let B=(()=>{class i{constructor(){this.maxSize=7,this.previousLabel="Previous",this.nextLabel="Next",this.screenReaderPaginationLabel="Pagination",this.screenReaderPageLabel="page",this.screenReaderCurrentLabel="You're on page",this.pageChange=new e.vpe,this.pageBoundsCorrection=new e.vpe,this._directionLinks=!0,this._autoHide=!1,this._responsive=!1}get directionLinks(){return this._directionLinks}set directionLinks(t){this._directionLinks=T(t)}get autoHide(){return this._autoHide}set autoHide(t){this._autoHide=T(t)}get responsive(){return this._responsive}set responsive(t){this._responsive=T(t)}trackByIndex(t){return t}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["pagination-controls"]],inputs:{id:"id",maxSize:"maxSize",directionLinks:"directionLinks",autoHide:"autoHide",responsive:"responsive",previousLabel:"previousLabel",nextLabel:"nextLabel",screenReaderPaginationLabel:"screenReaderPaginationLabel",screenReaderPageLabel:"screenReaderPageLabel",screenReaderCurrentLabel:"screenReaderCurrentLabel"},outputs:{pageChange:"pageChange",pageBoundsCorrection:"pageBoundsCorrection"},decls:4,vars:4,consts:[[3,"id","maxSize","pageChange","pageBoundsCorrection"],["p","paginationApi"],["role","navigation"],["class","ngx-pagination",3,"responsive",4,"ngIf"],[1,"ngx-pagination"],["class","pagination-previous",3,"disabled",4,"ngIf"],[1,"small-screen"],[3,"current","ellipsis",4,"ngFor","ngForOf","ngForTrackBy"],["class","pagination-next",3,"disabled",4,"ngIf"],[1,"pagination-previous"],["tabindex","0",3,"keyup.enter","click",4,"ngIf"],["aria-disabled","true",4,"ngIf"],["tabindex","0",3,"keyup.enter","click"],[1,"show-for-sr"],["aria-disabled","true"],[4,"ngIf"],["aria-live","polite"],[1,"pagination-next"]],template:function(t,n){if(1&t&&(e.TgZ(0,"pagination-template",0,1),e.NdJ("pageChange",function(s){return n.pageChange.emit(s)})("pageBoundsCorrection",function(s){return n.pageBoundsCorrection.emit(s)}),e.TgZ(2,"nav",2),e.YNc(3,E,6,8,"ul",3),e.qZA()()),2&t){const r=e.MAs(1);e.Q6J("id",n.id)("maxSize",n.maxSize),e.xp6(2),e.uIk("aria-label",n.screenReaderPaginationLabel),e.xp6(1),e.Q6J("ngIf",!(n.autoHide&&r.pages.length<=1))}},dependencies:[N,p.O5,p.sg,p.JJ],styles:['.ngx-pagination{margin-left:0;margin-bottom:1rem}.ngx-pagination:before,.ngx-pagination:after{content:" ";display:table}.ngx-pagination:after{clear:both}.ngx-pagination li{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;margin-right:.0625rem;border-radius:0}.ngx-pagination li{display:inline-block}.ngx-pagination a,.ngx-pagination button{color:#0a0a0a;display:block;padding:.1875rem .625rem;border-radius:0}.ngx-pagination a:hover,.ngx-pagination button:hover{background:#e6e6e6}.ngx-pagination .current{padding:.1875rem .625rem;background:#2199e8;color:#fefefe;cursor:default}.ngx-pagination .disabled{padding:.1875rem .625rem;color:#cacaca;cursor:default}.ngx-pagination .disabled:hover{background:transparent}.ngx-pagination a,.ngx-pagination button{cursor:pointer}.ngx-pagination .pagination-previous a:before,.ngx-pagination .pagination-previous.disabled:before{content:"\\ab";display:inline-block;margin-right:.5rem}.ngx-pagination .pagination-next a:after,.ngx-pagination .pagination-next.disabled:after{content:"\\bb";display:inline-block;margin-left:.5rem}.ngx-pagination .show-for-sr{position:absolute!important;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)}.ngx-pagination .small-screen{display:none}@media screen and (max-width: 601px){.ngx-pagination.responsive .small-screen{display:inline-block}.ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next){display:none}}\n'],encapsulation:2,changeDetection:0}),i})(),F=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({providers:[L],imports:[[p.ez]]}),i})();var H=l(0),R=l(6286),z=l(2425);const Y=function(i){return["/productdetails",i]};function J(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"div",6)(1,"div",7)(2,"header",8),e._UZ(3,"img",9),e.TgZ(4,"h3",10),e._uU(5),e.ALo(6,"cuttext"),e.qZA(),e.TgZ(7,"h4",11),e._uU(8),e.qZA(),e.TgZ(9,"div",12)(10,"span"),e._uU(11),e.ALo(12,"currency"),e.qZA(),e.TgZ(13,"p",13),e._UZ(14,"i",14),e.TgZ(15,"span"),e._uU(16),e.qZA()()()(),e.TgZ(17,"footer")(18,"button",15,16),e.NdJ("click",function(){const s=e.CHM(t).$implicit,o=e.MAs(19),g=e.oxw(2);return e.KtG(g.addProduct(s._id,o))}),e._uU(20," + Add to Cart "),e.qZA()()()()}if(2&i){const t=a.$implicit;e.xp6(2),e.Q6J("routerLink",e.VKq(14,Y,t._id)),e.xp6(1),e.Q6J("src",t.imageCover,e.LSH)("title",t.title)("alt",t.title),e.xp6(2),e.Oqu(e.xi3(6,8,t.title,2)),e.xp6(3),e.Oqu(t.category.name),e.xp6(3),e.Oqu(e.xi3(12,11,t.price,"EGP")),e.xp6(5),e.Oqu(t.ratingsAverage)}}const q=function(i,a,t){return{id:"productPaginate",itemsPerPage:i,currentPage:a,totalItems:t}};function Q(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"section")(1,"h2",1),e._uU(2,"All Products "),e.qZA(),e.TgZ(3,"div",2),e.YNc(4,J,21,16,"div",3),e.ALo(5,"paginate"),e.qZA(),e.TgZ(6,"div",4)(7,"pagination-controls",5),e.NdJ("pageChange",function(r){e.CHM(t);const s=e.oxw();return e.KtG(s.pageChanged(r))})("pageBoundsCorrection",function(r){e.CHM(t);const s=e.oxw();return e.KtG(s.pageChanged(r))}),e.qZA()()()}if(2&i){const t=e.oxw();e.xp6(4),e.Q6J("ngForOf",e.xi3(5,5,t.products,e.kEZ(8,q,t.pageSize,t.currentPage,t.totalItems))),e.xp6(3),e.Q6J("maxSize",9)("directionLinks",!0)("autoHide",!0)("responsive",!0)}}let j=(()=>{class i{constructor(t,n,r,s){this._ProductService=t,this._CartService=n,this._ToastrService=r,this._Renderer2=s,this.products=[],this.pageSize=0,this.currentPage=1,this.totalItems=0}ngOnInit(){this._ProductService.getProducts().subscribe({next:t=>{this.products=t.data,this.pageSize=t.metadata.limit,this.currentPage=t.metadata.currentPage,this.totalItems=t.results}})}addProduct(t,n){this._Renderer2.setAttribute(n,"disabled","true"),this._CartService.addToCart(t).subscribe({next:r=>{this._ToastrService.success(r.message),this._Renderer2.removeAttribute(n,"disabled"),this._CartService.cartNumber.next(r.numOfCartItems)},error:r=>{this._Renderer2.removeAttribute(n,"disabled")}})}pageChanged(t){this._ProductService.getProducts(t).subscribe({next:n=>{this.products=n.data,this.pageSize=n.metadata.limit,this.currentPage=n.metadata.currentPage,this.totalItems=n.results}})}static#e=this.\u0275fac=function(n){return new(n||i)(e.Y36(H.M),e.Y36(R.N),e.Y36(z._W),e.Y36(e.Qsj))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-products"]],standalone:!0,features:[e.jDz],decls:1,vars:1,consts:[[4,"ngIf"],[1,"text-center","text-main"],[1,"row","justify-content-center","g-4","py-4"],["class","col-sm-6 col-md-4 col-lg-3 col-xl-2 ",4,"ngFor","ngForOf"],[1,"d-flex","justify-content-center","mt-3"],["id","productPaginate","previousLabel","Previous","nextLabel","Next","screenReaderPaginationLabel","Pagination","screenReaderPageLabel","page","screenReaderCurrentLabel","You're on page",3,"maxSize","directionLinks","autoHide","responsive","pageChange","pageBoundsCorrection"],[1,"col-sm-6","col-md-4","col-lg-3","col-xl-2"],[1,"product","h-100"],[3,"routerLink"],[1,"w-100",3,"src","title","alt"],[1,"small"],[1,"text-main","h6"],[1,"d-flex","align-items-center","justify-content-between","small"],[1,"mb-0"],[1,"fas","fa-star","rating-color"],[1,"main-btn","w-100",3,"click"],["addBtn",""]],template:function(n,r){1&n&&e.YNc(0,Q,8,12,"section",0),2&n&&e.Q6J("ngIf",r.products.length>0)},dependencies:[p.ez,p.sg,p.O5,p.H9,x.rH,b.r,F,S,B],styles:[".product[_ngcontent-%COMP%]{overflow:hidden}.product[_ngcontent-%COMP%]   .main-btn[_ngcontent-%COMP%]{transform:translateY(150%);opacity:0;transition:.8s}.product[_ngcontent-%COMP%]:hover   .main-btn[_ngcontent-%COMP%]{transform:translateY(0);opacity:1}"]})}return i})()},6286:(y,f,l)=>{l.d(f,{N:()=>e});var p=l(5619),x=l(4769),b=l(9862);let e=(()=>{class _{constructor(c){this._HttpClient=c,this.baseUrl="https://ecommerce.routemisr.com",this.cartNumber=new p.X(0),this.myToken={token:localStorage.getItem("userToken")}}addToCart(c){return this._HttpClient.post(this.baseUrl+"/api/v1/cart",{productId:c},{headers:this.myToken})}getCartUser(){return this._HttpClient.get(this.baseUrl+"/api/v1/cart",{headers:this.myToken})}removeCartItem(c){return this._HttpClient.delete(this.baseUrl+"/api/v1/cart/"+c,{headers:this.myToken})}updataCartItem(c,m){return this._HttpClient.put(this.baseUrl+"/api/v1/cart/"+c,{count:m},{headers:this.myToken})}clearUserCart(){return this._HttpClient.delete(this.baseUrl+"/api/v1/cart",{headers:this.myToken})}checkOut(c,m){return this._HttpClient.post(this.baseUrl+`/api/v1/orders/checkout-session/${c}?url=http://localhost:4200`,{shippingAddress:m},{headers:this.myToken})}static#e=this.\u0275fac=function(m){return new(m||_)(x.LFG(b.eN))};static#t=this.\u0275prov=x.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"})}return _})()},0:(y,f,l)=>{l.d(f,{M:()=>b});var p=l(4769),x=l(9862);let b=(()=>{class e{constructor(u){this.HttpClient=u,this.baseUrl="https://ecommerce.routemisr.com/api/v1/"}getProducts(u=1){return this.HttpClient.get(this.baseUrl+`products?page=${u}`)}getProductDetails(u){return this.HttpClient.get(this.baseUrl+"products/"+u)}getCategories(){return this.HttpClient.get(this.baseUrl+"categories")}getCategoryDetails(u){return this.HttpClient.get(this.baseUrl+"categories/"+u)}getBrands(){return this.HttpClient.get(this.baseUrl+"brands")}getBrandsDetails(u){return this.HttpClient.get(this.baseUrl+"brands/"+u)}static#e=this.\u0275fac=function(c){return new(c||e)(p.LFG(x.eN))};static#t=this.\u0275prov=p.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})()}}]);