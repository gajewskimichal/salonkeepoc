import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductBasketItem } from 'src/app/shared/const/models/productBasketItem.model';
import { ProductsBasketService } from 'src/app/shared/services/products-basket.service';

@Component({
  selector: 'app-basket-preview',
  templateUrl: './basket-preview.component.html',
  styleUrls: ['./basket-preview.component.scss'],
})
export class BasketPreviewComponent {
  constructor(
    public productBasketService: ProductsBasketService,
    private router: Router
  ) {}

  goToCheckout(): void {
    this.productBasketService.isProductBasketItemVisible.next(false);
    this.router.navigate(['products/checkout']);
  }

  removeItemFromBasket(productBasketItem: ProductBasketItem): void {
    this.productBasketService.removeProductBasketItemFromBasket(
      productBasketItem
    );
  }
}
