import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppProductDialogComponent } from './app-product-dialog.component';

describe('AppProductDialogComponent', () => {
  let component: AppProductDialogComponent;
  let fixture: ComponentFixture<AppProductDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppProductDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppProductDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
