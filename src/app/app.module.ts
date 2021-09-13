import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { AlertComponent } from './test/components/alert/alert.component';
import { DetailComponent } from './test/components/detail/detail.component';
import { CartComponent } from './test/components/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    AlertComponent,
    DetailComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'test7/products/:productId',component: DetailComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
