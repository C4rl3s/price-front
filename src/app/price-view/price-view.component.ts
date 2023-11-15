import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-price-view',
  templateUrl: './price-view.component.html',
  styleUrls: ['./price-view.component.scss']
})
export class PriceViewComponent {


  constructor(private router: Router) {}

  swaggerURL = 'http://localhost:8080/swagger-ui/';

  navigateToSwagger(): void {
    window.open(this.swaggerURL, '_blank');
 }
}
