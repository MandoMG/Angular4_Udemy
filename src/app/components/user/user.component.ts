import { Component } from '@angular/core';
import { User } from '../../models/User';

@Component({
   selector: 'app-user',
   //template: '<h2>John Doe</h2>'
   templateUrl: './user.component.html',
   styleUrls: ['./user.component.css']
})

export class UserComponent {
   //Properties
   myUser: User;
   user: User = {
     firstName: 'John',
     lastName: 'Smith',
     email: ''
   }

   //Methods
   constructor() {
   }
  }