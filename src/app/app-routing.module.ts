import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guard/auth.guard';
const routes: Routes = [
  //auth
  {path:'',loadComponent:()=>import('./layouts/auth-layout/auth-layout.component')
.then((m)=>m.AuthLayoutComponent),
children :[
  {path:'',redirectTo:'login',pathMatch :'full'},
  {path:'login',loadComponent:()=>import('./components/login/login.component')
  .then((m)=>m.LoginComponent) ,title:'Login'},
  {path:'register',loadComponent:()=>import('./components/register/register.component')
  .then((m)=>m.RegisterComponent),title:'Register'},
  {path:'forget',loadComponent:()=>import('./components/forget-password/forget-password.component').then((m)=>m.ForgetPasswordComponent) ,title:'forgetPassword'},
]
},
// blank
  {path:'',
  canActivate:[authGuard],
  loadComponent:()=>import('./layouts/blank-layout/blank-layout.component')
  .then((m)=>m.BlankLayoutComponent) ,
  children:[
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',loadComponent:()=>import('./components/home/home.component').then((m)=>m.HomeComponent) ,title:'Home'},
    {path:'wishlist',loadComponent:()=>import('./components/wishlist/wishlist.component').then((m)=>m.WishlistComponent) ,title:'wishList'},
    {path:'cart',loadComponent:()=>import('./components/cart/cart.component').then((m)=>m.CartComponent) ,title:'Cart'},
    {path:'allorders',loadComponent:()=>import('./components/allorders/allorders.component').then((m)=>m.AllordersComponent) ,title:'allorders'},
    {path:'payment/:id',loadComponent:()=>import('./components/payment/payment.component').then((m)=>m.PaymentComponent) ,title:'payment'},
    {path:'products',loadComponent:()=>import('./components/products/products.component').then((m)=>m.ProductsComponent) ,title:'Products'},
    {path:'productdetails/:id',loadComponent:()=>import('./components/details/details.component').then((m)=>m.DetailsComponent) ,title:'Products'},
    {path:'categories',loadComponent:()=>import('./components/categories/categories.component').then((m)=>m.CategoriesComponent) ,title:'Categories'},
    {path:'categorydetails/:id',loadComponent:()=>import('./components/category-details/category-details.component').then((m)=>m.CategoryDetailsComponent) ,title:'Category Details'},
    {path:'brands',loadComponent:()=>import('./components/brands/brands.component').then((m)=>m.BrandsComponent) ,title:'Brands'},
    {path:'branddetails/:id',loadComponent:()=>import('./components/brand-details/brand-details.component').then((m)=>m.BrandDetailsComponent) ,title:'Brand Details'},
    {path:'forgetpassword',loadComponent:()=>import('./components/forget-password/forget-password.component').then((m)=>m.ForgetPasswordComponent) ,title:'forgetPassword'},

  ]
} ,
//notfound
{path:'**',loadComponent:()=>import('./components/not-found/not-found.component').then((m)=>m.NotFoundComponent),title:'NotFound'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
