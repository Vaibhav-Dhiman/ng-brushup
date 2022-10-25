import { Component, Input, Output, OnInit, EventEmitter, ChangeDetectionStrategy, OnChanges, SimpleChanges  } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnChanges {


  // ng on changes hooks can only be apply where we are having input property, means in a child component
  @Input() rooms: RoomList[] =[];
  @Input() title: string = '';
  @Output() selectedRoom= new EventEmitter<RoomList> ();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    // this also work in child component where values are getting change
   // console.log(changes);
  }

  ngOnInit() {
  }

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }
}
