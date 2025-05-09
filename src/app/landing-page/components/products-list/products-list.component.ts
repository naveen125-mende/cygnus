import { Component } from '@angular/core';
import { ProductsData } from '../../../constants/products.contstants';

@Component({
  selector: 'app-products-list',
  standalone: false,
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent {
products = ProductsData.Products
}
