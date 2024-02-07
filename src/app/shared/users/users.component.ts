// users.component.ts

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { Store, select } from '@ngrx/store';
import * as UserActions from './actions/user.actions'
import { UserState } from './reducers/user.reducer';
import { selectUsers } from './selectors/user.selectors';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users$ : Observable<User[]>;
  // isLoading$ : Observable<boolean>;

  constructor(private store: Store<UserState>){
    this.users$ = store.pipe(select(selectUsers));
    this.users$.subscribe(data => console.log(data))
  }

  ngOnInit(): void {
    this.store.dispatch(UserActions.loadUsers());
  }

}
