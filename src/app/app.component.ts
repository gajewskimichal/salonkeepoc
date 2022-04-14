import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsBasketService } from './shared/services/products-basket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'salonkee-poc';

  constructor(
    public productBasketService: ProductsBasketService,
    private router: Router
  ) {}

  onProductBasketClick(): void {
    const basketItemVisibility =
      this.productBasketService.isProductBasketItemVisible.getValue();
    this.productBasketService.isProductBasketItemVisible.next(
      !basketItemVisibility
    );
  }

  goToHomepage(): void {
    this.router.navigate(['/']);
  }
}
