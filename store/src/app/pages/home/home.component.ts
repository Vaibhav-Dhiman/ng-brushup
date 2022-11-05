import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { Product } from 'src/app/modals/product.model';
import { CartService } from 'src/app/services/cart.service';
import { StoreService } from 'src/app/services/store.service';

const ROWS_HEIGHT: {[id: number]: number} = {1:400, 3: 335, 4:350};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {
  cols = 3;
  category: string | undefined;
  rowHeight = ROWS_HEIGHT[this.cols];
  products: Array<Product> | undefined;
  sort = 'desc';
  count: number | undefined;
  productsSubcriptions: Subscription | undefined;

  constructor(private readonly cartService: CartService, private readonly storeService: StoreService) { }
  

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productsSubcriptions = this.storeService.getAllProducts(
      this.count, this.sort, this.category).subscribe(_products => {
      this.products = _products;
    });
  }

  onCoulmnsCountChange(colsNumber: number) {
    this.cols = colsNumber;
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }

  onSortChange(newSort: string) : void {
    this.sort = newSort;
    this.getProducts();
  }

  onItemCountChange(newCount: number) : void {
    this.count = newCount;
    this.getProducts();
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
    this.getProducts();
  }

  onAddToCart(product: Product): void {
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id,
    })
  }

  ngOnDestroy(): void {
    if(this.productsSubcriptions) {
      this.productsSubcriptions.unsubscribe();
    }
  }
}
