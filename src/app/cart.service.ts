import { Product } from './products';
import { Pais } from './pais';
import { Injectable } from '@angular/core';
/* . . . */
@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Pais[] = [];
  /* . . . */

  addToCart(pais: Pais) {
    this.items.push(pais);
  }

  getItems() {
    return this.items;
  }

  deleteCartId(id: string) {
    const nuevosItems = this.items.filter((item) => item.name !== id);
    this.items = nuevosItems;
    return nuevosItems;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  /* . . . */
}
