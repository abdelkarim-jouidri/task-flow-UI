import { createReducer, on } from '@ngrx/store';
import * as UserActions from '../actions/user.actions';
import { User } from '../../../models/user.model';

export const userFeatureKey = 'user';

export interface UserState {
  users : User[];
  loading : boolean;
  error : string | null
}

export const initialState: UserState = {
  users : [],
  loading : false,
  error : null
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.loadUsers, state => ({...state, loading : true})),
  on(UserActions.loadUsersSuccess, (state, { users }) => (
    { ...state, users, loading: false, error: null }
  )),
  on(UserActions.loadUsersFailure, (state, {error})=>({
      ...state,
      loading : false,
      error
  }))
);

