import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[];
  data: Observable<any>;

  constructor() {
    this.users = [
      {
        firstName: 'Jim',
        lastName: 'Halpert',
        email: 'jim.halpert@dundermifflin.com',
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'Pam',
        lastName: 'Beesly',
        email: 'paim.halpert@dundermifflin.com',
        isActive: true,
        registered: new Date('11/22/2017 11:30:00'),
        hide: true
      },
      {
        firstName: 'Kevin',
        lastName: 'Malone',
        email: 'kevin.malone@dundermifflin.com',
        isActive: false,
        registered: new Date('01/12/2017 12:15:00'),
        hide: true
      }
    ];
   }

  //  getData() {
  //    this.data = new Observable(observer => {
  //      setTimeout(() => {
  //        observer.next(1);
  //      }, 1000);
  //    });

  //    return this.data;
  //  }

  //  getUsers(): Observable<User[]> {
  //    return of(this.users);
   getUsers(): User[] {
     return this.users;
   }

   addUser(user: User){
     this.users.push(user);
   }
}
