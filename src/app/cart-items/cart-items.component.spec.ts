import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartItemsComponent } from './cart-items.component';
import { CartService } from '../cart.service';
import { MockCartService } from './MockCartService';

describe('CartItemsComponent', () => {
  let component: CartItemsComponent;
  let fixture: ComponentFixture<CartItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartItemsComponent],
      providers: [{ provide: CartService, useClass: MockCartService }],
    }).compileComponents();

    fixture = TestBed.createComponent(CartItemsComponent);
    TestBed.inject(CartService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.sum).toBe(40);
  });
});
