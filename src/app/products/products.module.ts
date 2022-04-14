import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { AppProductDialogComponent } from './app-product-dialog/app-product-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BasketPreviewComponent } from './basket-preview/basket-preview.component';
import { TotalPricePipe } from './basket-preview/total-price.pipe';
import { CheckoutComponent } from './checkout/checkout.component';
import { CheckoutConfirmationDialogComponent } from './checkout/checkout-confirmation-dialog/checkout-confirmation-dialog.component';

@NgModule({
  declarations: [
    ProductsComponent,
    AppProductDialogComponent,
    BasketPreviewComponent,
    TotalPricePipe,
    CheckoutComponent,
    CheckoutConfirmationDialogComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatTableModule,
    MatTooltipModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  exports: [BasketPreviewComponent],
})
export class ProductsModule {}
