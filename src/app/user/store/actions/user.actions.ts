import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';
import { User } from '../../../models/user';

export const getUsers =  createAction('[Users] Get Users')
// export const getUsersSuccess =  createAction('[Users] Get Users Success', props<{users : User[]}>)
// export const getUsersFailure =  createAction('[Users] Get Users Failure', props<{error: string}>)


export const getUsersSuccess = createAction(
  '[Users] Get Users Success',
  props<{ users: User[] }>()
);

export const getUsersFailure = createAction(
  '[Users] Get Users Failure',
  props<{error : string}>()
)