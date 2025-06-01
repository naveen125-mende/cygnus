import { Component, OnInit } from '@angular/core';
import { ProductsData } from '../../../constants/products.contstants';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-products-list',
  standalone: false,
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent implements OnInit{
  constructor (private router:Router, private location:Location){}
  products = ProductsData.Products;
  productsList : any[]=[];
  id: string ='';
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
