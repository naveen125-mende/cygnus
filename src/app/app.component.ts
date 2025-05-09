import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingPageModule } from './landing-page/landing-page.module';
import { MaterialComponentsModule } from './app-angular-material.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LandingPageModule,MaterialComponentsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cygnus-ui';
}
