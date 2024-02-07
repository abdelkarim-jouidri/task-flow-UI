// add-user.component.ts

import { Component, OnInit } from '@angular/core';
import { Role, User } from '../../models/user.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  roles = Object.values(Role)

  user: User = {
    uuid: '',
    firstname: '',
    lastname: '',
    password: '',
    role: Role.USER // Default role
  };

  ngOnInit(): void {
      
  }

  onSubmit() {
    console.log('Form submitted:', this.user);
    // You can perform additional actions like sending the data to a server here
  }


}
