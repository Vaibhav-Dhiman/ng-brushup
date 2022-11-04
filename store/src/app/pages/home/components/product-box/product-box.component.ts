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
  @Input() product: Product | undefined ;
  
  constructor() { }

  ngOnInit() {
  }

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }

}
