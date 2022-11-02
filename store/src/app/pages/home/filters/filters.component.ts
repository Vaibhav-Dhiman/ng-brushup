import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: 'filters.component.html',
  styles: [
  ]
})
export class FiltersComponent implements OnInit {
  categories = ['shoes', 'sports']

  constructor() { }

  ngOnInit(): void {
  }

}
