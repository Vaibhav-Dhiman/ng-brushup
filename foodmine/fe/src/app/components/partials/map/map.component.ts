import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { latLng, LatLngTuple, map, Map, tileLayer } from 'leaflet';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  private readonly DEFAULT_LATLNG: LatLngTuple = [28.40, 77.20];
  @ViewChild('map', {static: true})
  mapRef!: ElementRef

  map!: Map;

  constructor(private locationService: LocationService) { }

  ngOnInit(): void {
    this.initializeMap();
  }

  initializeMap() {
    if(this.map) return;
    this.map = map(this.mapRef.nativeElement, {
      attributionControl: false
    }).setView(this.DEFAULT_LATLNG, 9);

    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);

  }

  findMyLocation() {
    this.locationService.getCurrentLocation().subscribe({
      next:  (latLng) => {
        console.log(latLng);
      }
    })
  }
}
