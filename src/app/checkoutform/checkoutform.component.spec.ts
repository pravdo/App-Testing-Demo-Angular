import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutformComponent } from './checkoutform.component';
import { Contact } from '../Contact';
import { FormsModule } from '@angular/forms';

describe('CheckoutformComponent', () => {
  let component: CheckoutformComponent;
  let fixture: ComponentFixture<CheckoutformComponent>;
  const formData: Contact = {
    firstName: 'Pravdo',
    lastName: 'K',
    email: 'test@test.com',
    password: '2345',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [CheckoutformComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CheckoutformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('form submit', () => {
    expect(component).toBeTruthy();
    expect(component.submitted).toBe(false);
    component.submit(formData);
    fixture.detectChanges();
    expect(component.submitted).toBe(true);
  });
});
