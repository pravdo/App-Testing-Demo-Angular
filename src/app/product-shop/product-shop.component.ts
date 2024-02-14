import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from 'src/data/products';
import { Product } from 'src/product';

@Component({
  selector: 'app-product-shop',
  templateUrl: './product-shop.component.html',
  styleUrls: ['./product-shop.component.css'],
})
export class ProductShopComponent implements OnInit {
  product!: Product | undefined;
  disabledButton: boolean = false;
  submitted: boolean = false;
  text: string = 'Add to Cart';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const id = Number(routeParams.get('productId'));
    this.product = products.find((product) => product.id === id);
  }

  addToCart() {
    this.disabledButton = true;
    this.text = 'Added to Cart';
    this.submitted = true;
  }
}
