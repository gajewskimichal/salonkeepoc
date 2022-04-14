import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/shared/const/models/product.model';
import { ProductBasketItem } from 'src/app/shared/const/models/productBasketItem.model';
import { ProductsBasketService } from 'src/app/shared/services/products-basket.service';
import { ProductsService } from 'src/app/shared/services/products.service';
import { AppProductDialogComponent } from '../app-product-dialog/app-product-dialog.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  products$: Observable<any>;
  displayedColumns: string[] = [
    'id',
    'name',
    'quantity',
    'price',
    'image',
    'toolbar',
  ];

  constructor(
    private productsService: ProductsService,
    private dialog: MatDialog,
    private productBasketService: ProductsBasketService
  ) {
    this.products$ = this.productsService
      .getAllProducts()
      .pipe(map((response) => response.products));
  }

  onAddShoppingClick(product: Product): void {
    const dialogRef = this.dialog.open(AppProductDialogComponent, {
      width: '450px',
      data: { product: product },
    });

    dialogRef.afterClosed().subscribe((result: ProductBasketItem) => {
      if (result) {
        this.productBasketService.addProductBasketItemToBasket(result);
      }
    });
  }
}
