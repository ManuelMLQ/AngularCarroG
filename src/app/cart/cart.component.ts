import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Pais } from '../pais';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  items = this.cartService.getItems();
  pais: Pais | undefined;

  constructor(private cartService: CartService) {}

  eliminarToCart(pais: Pais) {
    this.items = this.cartService.deleteCartId(pais.name);
  }

  /*onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }*/
}
