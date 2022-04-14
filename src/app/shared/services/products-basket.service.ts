import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CacheKeys } from '../const/cacheKeys';
import { ProductBasketItem } from '../const/models/productBasketItem.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsBasketService {
  productBasketItemsBehaviorSubject = new BehaviorSubject<ProductBasketItem[]>(
    []
  );
  isProductBasketItemVisible = new BehaviorSubject<boolean>(false);
  private productsBasketItems = new Array<ProductBasketItem>();

  constructor() {
    this.loadDataFromStorage();
  }

  addProductBasketItemToBasket(productBasketItem: ProductBasketItem) {
    const foundIndex = this.getAlreadyExistingItemIndex(productBasketItem);
    if (foundIndex > -1) {
      this.productsBasketItems.splice(foundIndex, 1);
    }

    this.productsBasketItems.push(productBasketItem);
    this.productBasketItemsBehaviorSubject.next(this.productsBasketItems);
    localStorage.setItem(
      CacheKeys.SALONGURU_BASKET_CACHE_KEY,
      JSON.stringify(this.productsBasketItems)
    );
  }

  private getAlreadyExistingItemIndex(
    productBasketItem: ProductBasketItem
  ): number {
    return this.productsBasketItems.findIndex(
      (pbi) => pbi.id === productBasketItem.id
    );
  }

  removeProductBasketItemFromBasket(
    productBasketItemToRemove: ProductBasketItem
  ) {
    this.productsBasketItems = Array.from(
      this.productsBasketItems.filter(
        (pbi) => pbi.id !== productBasketItemToRemove.id
      )
    );
    this.productBasketItemsBehaviorSubject.next(this.productsBasketItems);
    localStorage.setItem(
      CacheKeys.SALONGURU_BASKET_CACHE_KEY,
      JSON.stringify(this.productsBasketItems)
    );
  }

  removeAllItemsFromBasket(): void {
    this.productsBasketItems = [];
    this.productBasketItemsBehaviorSubject.next(this.productsBasketItems);
    localStorage.setItem(
      CacheKeys.SALONGURU_BASKET_CACHE_KEY,
      JSON.stringify([])
    );
  }

  loadDataFromStorage(): void {
    const itemsFromLocalStorage = localStorage.getItem(
      CacheKeys.SALONGURU_BASKET_CACHE_KEY
    );
    if (itemsFromLocalStorage !== null) {
      const itemsFromLocalStorageDeserialized = JSON.parse(
        itemsFromLocalStorage
      );
      this.productsBasketItems = itemsFromLocalStorageDeserialized;
      this.productBasketItemsBehaviorSubject.next(this.productsBasketItems);
    }
  }
}
