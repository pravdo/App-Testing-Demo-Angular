import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertDetailsComponent } from './alert-details.component';
import { Product } from 'src/product';

describe('AlertDetailsComponent', () => {
  let component: AlertDetailsComponent;
  let fixture: ComponentFixture<AlertDetailsComponent>;
  const stubProduct: Product = {
    // mocked
    id: 3,
    name: 'Devops',
    price: 299,
    quantity: 0,
    status: '4 left',
    description: 'this course help us to understand automation testing',
    imgaddress:
      'https://learn.microsoft.com/en-us/devops/_img/devops-lifecycle.png',
  };

  const stubProduct2: Product = {
    // mocked
    id: 3,
    name: 'Devops',
    price: 710,
    quantity: 2,
    status: '4 left',
    description: 'this course help us to understand automation testing',
    imgaddress:
      'https://learn.microsoft.com/en-us/devops/_img/devops-lifecycle.png',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlertDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AlertDetailsComponent);
    component = fixture.componentInstance;
    component.product = stubProduct;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    const el: HTMLElement = fixture.nativeElement;
    const p = el.querySelector('p');
    expect(p?.textContent).toEqual('Course is available for discount');
  });

  it('verify paragraph logic', () => {
    expect(component).toBeTruthy();
    const el: HTMLElement = fixture.nativeElement;
    const p = el.querySelectorAll('p');
    expect(p.length).toEqual(2);
    component.product = stubProduct2;
    fixture.detectChanges();
    const el2: HTMLElement = fixture.nativeElement;
    const p2 = el2.querySelectorAll('p');
    expect(p2.length).toEqual(0);
  });

  it('verify product logic', () => {
    component.product = stubProduct;
    fixture.detectChanges();
    let selectedProduct: Product | undefined;
    component.notify.subscribe((product) => (selectedProduct = product));
    component.onClickChild();
    expect(selectedProduct).toEqual(stubProduct);
  });
});
