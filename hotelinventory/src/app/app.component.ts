import { Component, OnInit } from '@angular/core';
import { LoggerService } from './logger.service';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'hotelinventory';

  constructor(private readonly loogerService: LoggerService) {}
  ngOnInit(): void {
    this.loogerService.log('App init');
  }
}
