import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsComponent } from './product-details.component';

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.isToggled).toBe(true);
    component.enableBuying();
    expect(component.isToggled).toBe(false);
  });

  it('Verify title of the Product-details Component', () => {
    const element: HTMLElement = fixture.nativeElement; // html instance
    const header = element.querySelector('h1');
    expect(header?.textContent).toEqual('Product List');
  });
});
