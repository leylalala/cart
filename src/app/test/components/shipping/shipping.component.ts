import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.sass']
})
export class ShippingComponent implements OnInit {

  constructor(private cartService : CartService) { }
  // shippingCosts = this.cartService.getShippingPrices()

  ngOnInit(): void {
    const shippingCosts = this.cartService.getShippingPrices()
    console.log(shippingCosts);
    
  }

}
