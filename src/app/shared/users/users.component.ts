// users.component.ts

import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as UserActions from '../../user/store/actions/user.actions'
import { Observable } from 'rxjs';
import { errorSelector, isLoadingSelector, usersSelector } from '../../user/store/selectors/user.selectors';
import { AppState } from '../../user/types/appState.interface';
import { User } from '../../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
    // Add more users as needed
  ];

  users$ : Observable<User[]>;
  error$ : Observable<string|null>
  isLoading$ : Observable<boolean>;

  constructor(private store: Store<AppState>) {
   this.users$ = this.store.pipe(select(usersSelector))
   this.isLoading$ =  this.store.pipe(select(isLoadingSelector))
   this.error$ = this.store.pipe(select(errorSelector))
   this.users$.subscribe(res=>console.log(res))
  }

  ngOnInit(): void {
    this.store.dispatch(UserActions.getUsers())
  }

}
