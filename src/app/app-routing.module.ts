import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component'
import { DetailComponent } from './test/components/detail/detail.component';
import { CartComponent } from './test/components/cart/cart.component';
import { ShippingComponent } from './test/components/shipping/shipping.component';
const routes: Routes = [
  {path: 'test', component: TestComponent},
  {path: 'test/products/:productId',component: DetailComponent},
  {path: 'cart',component: CartComponent},
  {path: 'shipping', component: ShippingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
