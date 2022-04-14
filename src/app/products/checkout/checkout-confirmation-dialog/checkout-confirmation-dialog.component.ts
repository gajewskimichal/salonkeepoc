import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-checkout-confirmation-dialog',
  templateUrl: './checkout-confirmation-dialog.component.html',
  styleUrls: ['./checkout-confirmation-dialog.component.scss'],
})
export class CheckoutConfirmationDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<CheckoutConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { message: string }
  ) {}

  onAcceptClick(): void {
    this.dialogRef.close();
  }
}
