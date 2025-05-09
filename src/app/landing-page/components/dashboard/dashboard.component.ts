import { Component } from '@angular/core';
import { ProductsData } from '../../../constants/products.contstants';
import { DashboardData } from '../../../constants/dashboard.constants';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
 products_details=ProductsData.Dashboard_Products;
 six_reason_cards=DashboardData.Six_Reason_Cards;
 five_wings_solutions=DashboardData.Five_Wings_solutions;
}
