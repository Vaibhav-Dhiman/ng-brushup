import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/modals/cart.model';
import { CartService } from 'src/app/services/cart.service';

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
  constructor(private readonly cartService: CartService) { }

  getTotal(items: Array<CartItem>): number {
  return this.cartService.getTotal(items);
  }

  ngOnInit(): void {
    this.dataSource = this.cart.items;
  }

}
