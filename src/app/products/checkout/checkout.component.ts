import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProductsBasketService } from 'src/app/shared/services/products-basket.service';
import { ProductsService } from 'src/app/shared/services/products.service';
import { CheckoutConfirmationDialogComponent } from './checkout-confirmation-dialog/checkout-confirmation-dialog.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent {
  constructor(
    public productBasketService: ProductsBasketService,
    private productsService: ProductsService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  sendOrder(): void {
    this.productsService
      .checkout(
        this.productBasketService.productBasketItemsBehaviorSubject.getValue()
      )
      .subscribe((response) => {
        if (response.statusCode === 200) {
          const message = 'Your order has been successfully created!';
          const dialogRef = this.dialog.open(
            CheckoutConfirmationDialogComponent,
            {
              width: '580px',
              data: { message: message },
            }
          );

          dialogRef.afterClosed().subscribe(() => {
            this.router.navigate(['']);
          });

          this.productBasketService.removeAllItemsFromBasket();
        } else {
          this.dialog.open(CheckoutConfirmationDialogComponent, {
            width: '580px',
            data: { message: response.message },
          });
        }
      });
  }
}
