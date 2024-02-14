import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductShopComponent } from './product-shop/product-shop.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    pathMatch: 'full',
  },
  {
    path: 'products/:productId',
    component: ProductShopComponent,
  },
  {
    path: 'products',
    component: ProductDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
