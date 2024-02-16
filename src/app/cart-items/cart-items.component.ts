import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from 'src/product';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css'],
})
export class CartItemsComponent {
  products = this.cart.getProducts();
  sum: number = 0;
  newPrice: number = 0;
  shippingPrice = 8;
  totalPrice!: number;

  constructor(private cart: CartService) {}

  ngOnInit(): void {
    this.updateSum();
  }

  updateSum() {
    for (let i = 0; i < this.products.length; i++) {
      this.sum = this.sum + this.products[i].price;
    }

    this.totalPrice = this.sum + this.shippingPrice;
  }

  onKey(product: Product, value: any) {
    //product.price = original price
    //value * product.price = new price
    //sum -original price +new price
    this.newPrice = value * product.price;
    this.sum = this.sum - product.price + this.newPrice;
    this.totalPrice = this.sum + this.shippingPrice;
  }

  deleteProduct(product: Product) {
    let arr = this.products;

    console.log(this.products);
    const index = this.products.indexOf(product);
    arr.splice(index, 1);
    console.log(arr);
    console.log(this.products);
    this.products = arr;
    this.updateSum();
  }
}
