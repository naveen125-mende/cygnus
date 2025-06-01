import { Component } from '@angular/core';
import { ProductsData } from '../../../constants/products.contstants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  constructor (private router:Router){}

  products_details=ProductsData.Dashboard_Products;
  
  selectedCategoryId: string = '';

  selectCategory(id: string): void {
    localStorage.setItem('selectedCategoryId',id);
    this.router.navigate(['/products/products-list']);
  }

}
