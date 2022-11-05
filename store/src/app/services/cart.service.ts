import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItem } from '../modals/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart= new BehaviorSubject<Cart>({items: []});

  constructor(private _snackBar: MatSnackBar) { }

  addToCart(item: CartItem): void {
    const items =[...this.cart.value.items];
    const itemInCart = items.find((_item) => _item.id === item.id);
    if(itemInCart) {
      itemInCart.quantity +=1;
    } else {
      items.push(item);
    }

    this.cart.next({items});
    this._snackBar.open('1 item added to cart', 'Ok', {duration: 3000});
    console.log(this.cart.value);
  }

  getTotal(items: Array<CartItem>): number {
    return items.map((item) => item.price * item.quantity)
    .reduce((prev,cur) => prev + cur, 0);
  }

  removeQuantity(item: CartItem): void {
    let itemForRemoved: CartItem | undefined;
    let filteredItems = this.cart.value.items.map((_item) => {
        if(_item.id === item.id) {
          if(_item.quantity === 1) {
            this.removeFromCart(_item)
            itemForRemoved = _item;
          }
          _item.quantity--;
        }
        return _item;
      });
  }

  clearCart(): void {
    this.cart.next({items: []});
    this._snackBar.open('Cart is clear', 'OK', {duration: 3000});
  }

  removeFromCart(item: CartItem): void {
    const filteredItems = this.cart.value.items.filter((_item) => _item.id !=item.id);
    this.cart.next({items: filteredItems});
    this._snackBar.open('Item is removed', 'OK', {duration: 3000});
  }
}
