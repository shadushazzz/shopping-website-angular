// cart.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItems.asObservable();




  addToCart(item: any) {
    const items = this.cartItems.value;
    this.cartItems.next([...items, item]);
  }

  removeFromCart(itemId: any) {
    const items = this.cartItems.value.filter(item => item.id !== itemId);
    this.cartItems.next(items);
  }

  isInCart(itemId: any): boolean {
    return this.cartItems.value.some(item => item.id === itemId);
  }

  getProducts() {
    return this.cartItems.value;
  }
  calculateTotalPrice() {
   return this.cartItems.value.reduce((total, item) => total + item.price * (item.quantity || 1), 0);
  }

  // Clear all items from the cart
  clearCart() {
    this.cartItems.next([]);
  }
}


