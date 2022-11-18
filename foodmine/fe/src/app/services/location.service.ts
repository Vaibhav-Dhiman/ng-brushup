import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }

  getCurrentLocation() {
return new Observable((observer) => {
  if(!navigator.geolocation) return;
  return navigator.geolocation.getCurrentPosition(
    (pos) => {
      observer.next({
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      })
    }, (err => {observer.error(err)})
  )
})
  }
}
