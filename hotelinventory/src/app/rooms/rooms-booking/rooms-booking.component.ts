import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, Observable, observable } from 'rxjs';

@Component({
  selector: 'hinv-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.scss']
})
export class RoomsBookingComponent implements OnInit {
 // id$ = this.router.paramMap.pipe(map((params => params.get('roomid'))));
  id !: string | undefined;

  // ActivatedRouteService - allow to read the router data, allow to access the snapshort data
  constructor(private readonly router: ActivatedRoute) { }

  ngOnInit() {
    this.router.paramMap.subscribe((params : ParamMap)=> {  
      this.id = params.get('roomid')?.toString();
    }); 
  }

}
