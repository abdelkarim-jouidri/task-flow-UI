import { createActionGroup, createReducer, emptyProps, on, props } from '@ngrx/store';
import { UserState } from '../../types/userState.interface';
import * as UserActions from '../actions/user.actions'
export const initialState : UserState = {
  isLoading : false,
  error : null,
  users : []
}

export const reducers = createReducer(
  initialState,
  on(UserActions.getUsers, (state)=> ({...state, isLoading : true})),
  on(UserActions.getUsersFailure, (state, action)=>({...state, isLoading : false, users : action.users}))
  )
