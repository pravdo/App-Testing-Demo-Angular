import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AlertDetailsComponent } from './alert-details/alert-details.component';
import { ProductShopComponent } from './product-shop/product-shop.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { CheckoutformComponent } from './checkoutform/checkoutform.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    AlertDetailsComponent,
    ProductShopComponent,
    LandingPageComponent,
    CartItemsComponent,
    CheckoutformComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
