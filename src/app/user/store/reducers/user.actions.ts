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
  // on(UserActions.getUsers, (state)=> ({...state, isLoading : true})),
  // on(UserActions.getUsersFailure, (state, {error})=>({...state, error : error, isLoading : false }))
  on(UserActions.getUsers, (state)=> ({...state, isLoading : true})),
  on(UserActions.getUsersSuccess, (state, { users }) => ({
    ...state,
    users: users,
    isLoading: false,
    error: null
  })),
  on(UserActions.getUsers, (state)=> ({...state, isLoading : true})),
  on(UserActions.getUsersSuccess, (state, { users }) => ({
    ...state,
    users: users,
    isloading: false,
    error: null
  })),
  on(UserActions.getUsersFailure, (state, {error})=> ({
    ...state,
    isLoading : false,
    error : error
  }))
  )
