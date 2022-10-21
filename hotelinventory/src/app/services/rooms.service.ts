import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs';
import { Room, RoomList } from '../rooms/rooms';

@Injectable({
  providedIn: 'root'
})


export class RoomsService {
  roomList: RoomList[]= [];

  getRooms$ = this.http.get<RoomList[]>('/api/rooms').pipe(
    shareReplay(1)
  );

  constructor(private readonly http: HttpClient) { }

  getRooms() {
    return this.http.get<RoomList[]>('/api/rooms');
  }

  addRoom(room: RoomList) {
    return this.http.post<RoomList[]>('/api/rooms', room);
  }

  getPhotos() {
    const request  = new HttpRequest('GET', 'https://jsonplaceholder.typicode.com/photos', {
      reportProgress: true,
    });
      return this.http.request(request);
  }
}
