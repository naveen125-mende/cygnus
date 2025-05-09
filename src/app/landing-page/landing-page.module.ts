import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { MaterialComponentsModule } from '../app-angular-material.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    LandingPageComponent,
    AboutUsComponent,
    ContactUsComponent,
    BlogsComponent,
    ProductsComponent,
    ProductsListComponent,
    ProductDetailsComponent,
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    MaterialComponentsModule
  ]
})
export class LandingPageModule { }
