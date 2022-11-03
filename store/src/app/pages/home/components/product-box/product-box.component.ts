import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/modals/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styles: []
})
export class ProductBoxComponent implements OnInit {
  @Input()fullWidthMode = false;
  @Output() addToCart = new EventEmitter();

  product: Product | undefined = {
    id: 1,
    title: 'show',
    price: 234,
    category: 'Footwear',
    image: 'https://via.placeholder.com/150',
    description: 'nike sneaker',
  };
  
  constructor() { }

  ngOnInit() {
  }

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }

}
