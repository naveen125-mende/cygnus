import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';

const routes: Routes = [
  { path: '', component:LandingPageComponent, children: [
    { 
      path: '', component: DashboardComponent 
    },
    {
      path:'about-us',component:AboutUsComponent
    },
    {
      path:'contact-us',component:ContactUsComponent
    },
    {
      path:'blogs',
      children:[
        {path :'', component:BlogsComponent},
        {path : 'blog-details', component: BlogDetailsComponent}
      ]
    },
    {
      path:'products',
      children: [
        { path: '', component:ProductsComponent },
        { path: 'products-list', component: ProductsListComponent },
        { path: 'product-details', component: ProductDetailsComponent }
      ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
  ] 
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
