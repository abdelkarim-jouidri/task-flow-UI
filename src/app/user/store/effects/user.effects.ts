import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as UserActions from '../actions/user.actions'
import { catchError, map, mergeMap, of } from 'rxjs';
import { UserService } from '../../service.service';


@Injectable()
export class UserEffects {

  getUsers$ = createEffect(()=>
    this.actions$.pipe(ofType(UserActions.getUsers), mergeMap(()=>{
      return this.userService.getUsers().pipe(
        map(users => UserActions.getUsersSuccess({users})), catchError(error => of(UserActions.getUsersFailure({error}))))
    }))
  )

  constructor(private actions$: Actions, private userService: UserService) {}
}
