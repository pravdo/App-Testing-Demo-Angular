import { Component } from '@angular/core';
import { products } from 'src/data/products';
import { Product } from 'src/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  title: string = 'E Commerce App';
  products: Product[] = products;

  onClick(product: Product) {
    window.alert(`${product.name} Couse videos are available`);
  }
}
