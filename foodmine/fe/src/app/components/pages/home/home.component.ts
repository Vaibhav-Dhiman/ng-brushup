import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foods: Food[] = [];

  constructor(private readonly foodService: FoodService, activatedRoute: ActivatedRoute) {
    let foodObervable: Observable<Food[]>;
    
    activatedRoute.params.subscribe((params) => {
      if(params['searchTerm'])
      foodObervable = this.foodService.getAllFoodBySearchTerm(params['searchTerm']);
      else if(params['tag'])
      foodObervable = this.foodService.getAllFoodByTag(params['tag']);
      else foodObervable = foodService.getAll();

      foodObervable.subscribe(data => this.foods = data);
    })
  }

  ngOnInit(): void {
  }

}
