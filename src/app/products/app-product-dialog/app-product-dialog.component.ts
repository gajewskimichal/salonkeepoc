import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/shared/const/models/product.model';
import { ProductBasketItem } from 'src/app/shared/const/models/productBasketItem.model';

@Component({
  selector: 'app-app-product-dialog',
  templateUrl: './app-product-dialog.component.html',
  styleUrls: ['./app-product-dialog.component.scss'],
})
export class AppProductDialogComponent {
  product!: Product;
  quantityControl = new FormControl('', [Validators.required]);

  constructor(
    public dialogRef: MatDialogRef<AppProductDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { product: Product }
  ) {
    this.product = data.product;
    this.quantityControl.setValidators([
      Validators.max(this.product.quantity),
      Validators.min(1),
    ]);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onOkClick(): void {
    let productBasketItem = new ProductBasketItem(
      this.product.id,
      this.product.name,
      this.quantityControl.value,
      this.product.price
    );
    this.dialogRef.close(productBasketItem);
  }
}
