import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private router: Router , public getCartService: CartService){}

  cartItems : any[] = [];
  disableCart : boolean = false;
  cartCount : number = 0;
  ngOnInit() {
    this.getCartService.cartItems$.subscribe(cartItems => {
        this.disableCart = cartItems.length === 0;
        this.cartCount = cartItems.length;
      });
  }

  addToCart () {
  this.router.navigate(['/'])
  }

  goToCart () {
    this.router.navigate(['/cart'])
  }
}
