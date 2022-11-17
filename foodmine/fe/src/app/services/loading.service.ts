import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private isLodingSubject = new BehaviorSubject<boolean>(false);
  constructor() { }
  
  showLoading() {
    this.isLodingSubject.next(true);
  }

  hideLoading() {
    this.isLodingSubject.next(false);
  }

  get isLoading() {
    return this.isLodingSubject.asObservable();
  }
}
