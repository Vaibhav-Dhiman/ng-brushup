import { Component, OnInit } from '@angular/core';
import { RoomList } from '../rooms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'hinv-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.scss']
})

export class RoomsAddComponent implements OnInit {
  // room: RoomList = {
  //   roomType: '',
  //   amenities: '',
  //   checkinTime: new Date,
  //   checkoutTIme: new Date,
  //   photos: '',
  //   price: 0,
  //   rating: 0,
  //   roomNumber: '0',
  // }

  name: string = 'Hardik';

  constructor() { }

  ngOnInit() {
  }

  onSubmit(myForm: NgForm) {
 
 //   console.log(myForm.value);
 
 //   console.log(myForm.valid);
     
  }

}
