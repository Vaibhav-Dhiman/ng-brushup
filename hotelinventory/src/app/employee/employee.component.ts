import { Component, OnInit, Self } from '@angular/core';
import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'hinv-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers: [RoomsService]
})
export class EmployeeComponent implements OnInit {
  empName: string = 'John';
  constructor(@Self() private readonly roomService: RoomsService) { }

  ngOnInit() {
  }

}
