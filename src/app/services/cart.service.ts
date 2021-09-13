import { Injectable } from '@angular/core';

interface Product{
  id: number,
  name: String,
  price: number,
  description: string
} 
@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = []

  constructor() { }

  addToCart(product: Product){
    this.items.push(product)
  }

  getItems() {
    return this.items
  }

  clearChart() {
    this.items = []
    return this.items
  }
}
