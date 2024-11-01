import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../../services/cart-service.service';
import { DecimalPipe } from '@angular/common';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  removed: boolean;
}

@Component({
  selector: 'app-cartpage',
  standalone: true,
  imports: [CommonModule, DecimalPipe],
  templateUrl: './cartpage.component.html',
  styleUrl: './cartpage.component.css',

})
export class CartpageComponent {

  fixedHeight: boolean = false;

  totalPrice: number = 0;

  constructor(public getCartService: CartService){}

  cartItems : Product[] = [];
  ngOnInit() {
    this.getCartService.cartItems$.subscribe(items => {
      this.cartItems = items;
      this.totalPrice = this.getCartService.calculateTotalPrice();
      this.cartItems.length <= 2 ? this.fixedHeight = true : this.fixedHeight = false;
    });

  }

  removeFromCart(id: number) {
    const index = this.cartItems.findIndex(item => item.id === id);

    if (index !== -1) {
      // Temporarily add the 'removed' class to trigger the transition
      this.cartItems[index].removed = true;

      // Remove the item after the transition duration
      setTimeout(() => {
        this.getCartService.removeFromCart(id);
      }, 300);
  }
}

  clearCart() {
    this.getCartService.clearCart()
  }


}
