import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as UserActions from '../actions/user.actions'
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { UserService } from '../service/user.service';


@Injectable()
export class UserEffects {

  loadUsers$ = createEffect(()=>this.actions$.pipe(
    ofType(UserActions.loadUsers),
    mergeMap(()=>this.userService.getUsers().
      pipe(
        map(users => UserActions.loadUsersSuccess({users})),
        // tap(users => console.log('Fetched users:', users)), 
        catchError(error => of(UserActions.loadUsersFailure({error})))
      ))
  ))


  constructor(private actions$: Actions, private userService : UserService) {}
}
