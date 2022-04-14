import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductBasketItem } from '../const/models/productBasketItem.model';
import { URLS } from '../const/urls';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  getAllProducts(): Observable<any> {
    return this.httpClient.get(URLS.getAllProducts());
  }

  checkout(productBasketItems: ProductBasketItem[]): Observable<any> {
    const requestMappedItems = productBasketItems.map((pbi) => ({
      product_id: parseInt(pbi.id, 10),
      quantity: pbi.quantity,
    }));
    return this.httpClient.post(URLS.checkout(), requestMappedItems);
  }
}
