import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'hinv-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  
  bookingForm!: FormGroup;
  get guests() {
    return this.bookingForm.get('guests') as FormArray;
  } 

  constructor(private readonly configService: ConfigService, private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      roomId: new FormControl(''),
      guestEmail: [''],
      checkinDate: [''],
      checkOutDate: [''],
      bookingStatus: [''],
      bookingAmount: [''],
      bookingDate: [''],
      mobileNumber: [''],
      guestName: [''],
      guestAddress: this.fb.group({
       addressLine1: [''],
       addressLine2: [''],
       city: [''],
       state: [''],
       country: [''],
       zipCode: [''],
      }),
      guests: this.fb.array([
        this.fb.group({ guestName: [''], age: new FormControl('')}),
      ]),
    });
  }

  addBooking() {
    // by using bookingForm.getRawValue we can get the values of disable controls as well
    console.log(this.bookingForm.getRawValue);
  }

  addGuest() {
    // add controls on button click as dynamic
    this.guests.controls.push(
      this.fb.group({ guestName: [''], age: new FormControl('')}
      ));
  }
}

