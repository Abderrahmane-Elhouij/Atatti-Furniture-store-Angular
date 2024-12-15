import { Component, effect, inject, output, signal, Signal } from '@angular/core';
import { CartService } from '../services/cart.service';
import { DecimalPipe } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { CheckoutComponent } from '../checkout-component/checkout-component.component';

@Component({
  selector: 'app-add-to-card',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './add-to-card.component.html',
})
export class AddToCardComponent {
  cartItems = signal<any[]>([]); // Reactive cart items array
  private cartService = inject(CartService);
  totalItems= 0;

  constructor() {
    effect(() => {
      this.totalItems = this.cartItems().reduce(
        (total, item) => total + item.quantity,
        0
      );
      this.sendData(); // Automatically send updated totalItems
    });
  }

  ngOnInit() {
    this.cartItems.set(this.cartService.getCartItems());
  }

  // Increase item quantity
  increaseQuantity(item: any) {
    const updatedItems = this.cartItems().map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      }
      return cartItem;
    });
    this.cartItems.set(updatedItems);
  }

  // Decrease item quantity
  decreaseQuantity(item: any) {
    const updatedItems = this.cartItems().map((cartItem) => {
      if (cartItem.id === item.id && cartItem.quantity > 1) {
        return { ...cartItem, quantity: cartItem.quantity - 1 };
      }
      return cartItem;
    });
    this.cartItems.set(updatedItems);
  }

  // Remove item from cart
  removeItem(item: any) {
    const updatedItems = this.cartItems().filter(
      (cartItem) => cartItem.id !== item.id
    );
    this.cartItems.set(updatedItems);
  }

  // Calculate total price
  calculateTotal() {
    return this.cartItems().reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  sendData() {
    this.cartService.sendData(this.totalItems, 'addtocart'); // Send data to the service
  }

  readonly dialog = inject(MatDialog);

  openCheckoutDialog() {
    this.dialog.open(CheckoutComponent, {
      width: '800px',
      height: 'auto', 
     
    });
  }

}
