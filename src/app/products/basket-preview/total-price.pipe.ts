import { Pipe, PipeTransform } from '@angular/core';
import * as currency from 'currency.js';
import { ProductBasketItem } from 'src/app/shared/const/models/productBasketItem.model';

@Pipe({
  name: 'totalPrice',
  pure: false,
})
export class TotalPricePipe implements PipeTransform {
  transform(productsBasketItems: ProductBasketItem[] | null): number {
    return productsBasketItems
      ? productsBasketItems.reduce((acc, curr) => {
          return currency(acc).add(currency(curr.price).multiply(curr.quantity))
            .value;
        }, 0)
      : 0;
  }
}
