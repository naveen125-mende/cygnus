import { Component } from '@angular/core';
import { DashboardData } from '../../../constants/dashboard.constants';

@Component({
  selector: 'app-about-us',
  standalone: false,
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {
cards_data= DashboardData.About_Us_Cards;
}
