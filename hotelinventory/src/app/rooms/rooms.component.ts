import { HttpEventType } from '@angular/common/http';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { HeaderComponent } from '../header/header.component';
import { ConfigService } from '../services/config.service';
import { RoomsService } from '../services/rooms.service';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
 myString = 'hello my string';
 numberOfRooms= 39;
 hideRooms = false;
 selectedRoom!: RoomList;
 title = 'Hotel Highland';
totalByte =0;
susbcription!: Subscription;

 rooms: Room = {
    availableRooms: 10,
    bookedRooms: 5,
    totalRooms: 20,
  };

  roomList: RoomList[] = [];
  stream = new Observable(observer => {
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.complete();
  });

// by using view child you can instantiate a component to get the data from that component same as input but wihtout using input
// if pass static option as true in below it can get the data on ngInit as well
// if above is true then it will call in ngafter view in it
@ViewChild(HeaderComponent, {static: true}) headerComponent!: HeaderComponent;

  constructor(private readonly roomService: RoomsService, private readonly config: ConfigService) {   // should not write any blocking code in ctor
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
    roomNumber:  '101',
    roomType: 'Delux Room',
    amenities: 'Air Condition, Mountain View, Tv, WiFi, Bathroom',
    price: 1600,
    photos: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
    checkinTime: new Date('8-Dec-2022'),
    checkoutTIme: new Date('9-Dec-2022'),
    rating: 2.4,
    }
    this.roomService.addRoom(room).subscribe(rooms => {
      this.roomList = rooms;
    });
    ///this.roomList.push(room);
    //this.roomList = [...this.roomList, room];
  }


  ngOnInit() {
   // console.log(this.config);
    this.roomService.getPhotos().subscribe(event => {
      switch (event.type) {
       case HttpEventType.Sent: {
       // console.log('Request has been made');
        break;
       }
       case HttpEventType.ResponseHeader: {
       // console.log('Request success');
        break;
       }
       case HttpEventType.DownloadProgress: {
        this.totalByte += event.loaded;
        break;
       }
       case HttpEventType.Response: {
       // console.log(event.body);
        break;
       }
      }
    })
    // this.stream.subscribe({
    //   next: (value) => console.log(value),
    //   complete: () => console.log('complete'),
    //   error: (err) => console.log(err),
    // });
   this.susbcription =  this.roomService.getRooms$.subscribe(data => this.roomList = data);
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Hotel Kamna Hills';
  }
}
