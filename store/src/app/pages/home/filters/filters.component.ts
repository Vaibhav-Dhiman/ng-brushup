import { Component, EventEmitter, OnInit, Output, OnDestroy  } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-filters',
  templateUrl: 'filters.component.html',
  styles: [
  ]
})
export class FiltersComponent implements OnInit, OnDestroy {
  @Output() showCategory = new EventEmitter<string>();
  categories: Array<string> | undefined;
  categoriesSubscription: Subscription | undefined;


  constructor(private readonly storeService: StoreService) { }

  ngOnDestroy(): void {
    if (this.categoriesSubscription)
      this.categoriesSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.categoriesSubscription = this.storeService.getAllCategories().subscribe(cat => this.categories= cat);
  }

  ngShowCategory(category: string): void {
    this.showCategory.emit(category);
  }



}
