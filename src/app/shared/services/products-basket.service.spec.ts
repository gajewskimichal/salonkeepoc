import { TestBed } from '@angular/core/testing';

import { ProductsBasketService } from './products-basket.service';

describe('ProductsBasketService', () => {
  let service: ProductsBasketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsBasketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
