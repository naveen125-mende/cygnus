import { Component, OnInit } from '@angular/core';
import { ProductsData } from '../../../constants/products.contstants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  standalone: false,
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent implements OnInit{
  products = ProductsData.Products;
  productsList : any[]=[];
  id: string | number | undefined;
  
  constructor (private router:Router){}
  
  selectedProductId: string = '';

  selectProduct(id: string): void {
    localStorage.setItem('selectedProductId',id);
    this.router.navigate(['/products/product-details']);
  }
  ngOnInit(): void {
   const storedId = localStorage.getItem('selectedCategoryId');
   if (storedId){
     this.id = storedId;
    this.productsList = this.products[this.id as keyof typeof ProductsData.Products];
   }
  }


}
