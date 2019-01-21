import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSubCatComponent } from './product-sub-cat.component';

describe('ProductSubCatComponent', () => {
  let component: ProductSubCatComponent;
  let fixture: ComponentFixture<ProductSubCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSubCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSubCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
