import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/modals/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: 'cart.component.html',
  styles: [
  ]
})
export class CartComponent implements OnInit {
  cart: Cart = {items:[
    { 
      product: 'https://via.placeholder.com/150',
      name: 'Nike Running DP2',
      price: 234,
      quantity: 1,
      id: 1,
    },
    {
      product: 'https://via.placeholder.com/150',
      name: 'Nike Running DP2',
      price: 120,
      quantity: 2,
      id: 1,
    }
  ]};
  dataSource: Array<CartItem> = [];
  displayColumns: Array<string> =[
    'product', 
    'name', 
    'price',
     'quantity', 
     'total',
      'action'
    ]
  constructor() { }

  getTotal(items: Array<CartItem>): number {
    return items.map((item) => item.price * item.quantity)
    .reduce((prev,cur) => prev + cur, 0);
  }

  ngOnInit(): void {
    this.dataSource = this.cart.items;
  }

}
