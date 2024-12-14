import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // Reactive cart items array
  private cartItems = signal<any[]>([]);
  private totalItems = 0;

  private totalItemsSubject = new BehaviorSubject<number>(0); // Initial value: null
  totalItems$ = this.totalItemsSubject.asObservable(); // Observable to listen for changes

  sendData(data: any, source: string) {
    if (source === 'oneproduct') {
      this.totalItems += data; // Emit the updated totalItems
      this.totalItemsSubject.next(this.totalItems); // Emit the updated totalItems
      console.log(`Updated total items: ${this.totalItems}`);
    } else if (source === 'addtocart') {
      this.totalItemsSubject.next(data); // Emit the updated totalItems
    }
  }

  // Add item to the cart
  addToCart(item: any) {
    const updatedItems = [...this.cartItems(), item];
    this.cartItems.set(updatedItems);
  }

  // Get all cart items
  getCartItems() {
    return this.cartItems(); // Return current value of the signal
  }

  // Clear the cart
  clearCart() {
    this.cartItems.set([]); // Clear cart by setting an empty array
  }
}
