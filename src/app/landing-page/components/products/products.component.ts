import { Component } from '@angular/core';
import { ProductsData } from '../../../constants/products.contstants';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  products_details=ProductsData.Dashboard_Products;
}
