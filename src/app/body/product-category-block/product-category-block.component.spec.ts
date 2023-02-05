import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategoryBlockComponent } from './product-category-block.component';

describe('ProductCategoryBlockComponent', () => {
  let component: ProductCategoryBlockComponent;
  let fixture: ComponentFixture<ProductCategoryBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCategoryBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCategoryBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
