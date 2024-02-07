import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from '../../types/userState.interface';
import { AppState } from '../../types/appState.interface';

export const selectFeature = (state: AppState) => state.users;

export const isLoadingSelector = createSelector(selectFeature, (state)=>state.isLoading);
export const errorSelector = createSelector(selectFeature, (state)=>state.error);
export const usersSelector = createSelector(selectFeature, (state)=>state.users);



