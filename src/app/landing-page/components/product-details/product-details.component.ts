import { Component, OnInit } from '@angular/core';
import { ProductsData } from '../../../constants/products.contstants';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit{
  products = ProductsData.Products;

  productDetails : any []= [];
  
  id: string | number | undefined;

  ngOnInit(): void {
    const storedId = localStorage.getItem('selectedProductId');
    if (storedId){
      this.id = storedId;
      this.productDetails = this.products[this.id as keyof typeof ProductsData.Products];
   }
  }

  images : string[]= [
    'assets/product-1.svg',
    'assets/product-2.svg',
    'assets/product-3.svg',
  ]
  selectedImage: string = this.images[0];
  selectImage(image: string) {
    this.selectedImage = image;
  }
}
