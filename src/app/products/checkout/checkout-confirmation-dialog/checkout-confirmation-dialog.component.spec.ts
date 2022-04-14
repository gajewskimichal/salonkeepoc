import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutConfirmationDialogComponent } from './checkout-confirmation-dialog.component';

describe('CheckoutConfirmationDialogComponent', () => {
  let component: CheckoutConfirmationDialogComponent;
  let fixture: ComponentFixture<CheckoutConfirmationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutConfirmationDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
