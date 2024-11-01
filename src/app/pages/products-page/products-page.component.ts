import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CartService } from '../../services/cart-service.service';
import { FetchProductsService } from '../../services/fetch-products.service';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent {

  products: Product[]  = [];

  constructor(private productsService: FetchProductsService , public cartService : CartService) {
  }



  isLoading: boolean = true;



  ngOnInit(): void {

    this.productsService.getAllProducts('https://fakestoreapi.com/products/').subscribe({
      next: (val) => {
         console.log(val)
         this.products = val;
         this.isLoading = false;
      },
      error: (err) => {
        console.log(err);
        this.isLoading = false;
      }
    })

  }


  toggleCart(product: Product) {
    if (this.cartService.isInCart(product.id)) {
      this.cartService.removeFromCart(product.id);
    } else {
      this.cartService.addToCart(product);
    }
  }
}
