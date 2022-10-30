import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
import { LoggerService } from './logger.service';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'hotelinventory';

  constructor(private readonly loogerService: LoggerService, private readonly router: Router) {}
  ngOnInit(): void {
    this.loogerService.log('App init');
    // this.router.events.subscribe(rt => console.log(rt));
   this.router.events.pipe(
      filter((event) => event instanceof  NavigationStart))
      .subscribe(data =>
         console.log('NavigationStart')
         );

      this.router.events.pipe(
        filter((event) => event instanceof  NavigationEnd))
        .subscribe(data => 
          console.log('NavigationCompleted')
        );
  }
}
