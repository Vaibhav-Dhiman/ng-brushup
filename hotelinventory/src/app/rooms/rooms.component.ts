import { Component, OnInit } from '@angular/core';
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
 
 rooms: Room = {
    availableRooms: 10,
    bookedRooms: 5,
    totalRooms: 20,
  };

  roomList: RoomList[] = [
    {
    roomNumber:  323,
    roomType: 'Delux Room',
    amenities: 'Air Condition, Mountain View, Tv, WiFi, Bathroom',
    price: 600,
    photos: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
    checkinTime: new Date('8-Dec-2022'),
    checkoutTIme: new Date('9-Dec-2022'),
  },
  {
    roomNumber:  321,
    roomType: 'Luxry Room',
    amenities: 'Air Condition, Mountain View, Tv, WiFi, Bathroom, Tea',
    price: 1000,
    photos: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=958&q=80',
    checkinTime: new Date('3-Dec-2022'),
    checkoutTIme: new Date('9-Dec-2022'),
  },
  {
    roomNumber:  32,
    roomType: 'Private Suit',
    amenities: 'Air Condition, Mountain View, Tv, WiFi, Bathroom, Tea, King Size Bed, Welcome Drink',
    price: 1400,
    photos: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    checkinTime: new Date('17-Dec-2022'),
    checkoutTIme: new Date('9-Dec-2022'),
  },
]

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

}
