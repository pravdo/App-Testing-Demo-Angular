import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/product';

@Component({
  selector: 'app-alert-details',
  templateUrl: './alert-details.component.html',
  styleUrls: ['./alert-details.component.css'],
})
export class AlertDetailsComponent {
  @Input() product!: Product;
  @Output() notify = new EventEmitter<Product>();

  onClickChild() {
    this.notify.emit(this.product);
  }
}
