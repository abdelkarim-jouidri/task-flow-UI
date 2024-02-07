import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from '../reducers/user.reducer';

export const selectFeature = (state: UserState) => state;

export const selectUsers = createSelector(
    selectFeature,
    (state)=> {
        console.log("users : ", state.users)
        return state.users
    }
)

// export const selectLoading = createSelector(
//     selectUserState,
//     (state: UserState) => {
//         console.log("loading : "+ state.loading)
//         return state.loading}
// );

// export const selectError = createSelector(
//     selectUserState,
//     (state: UserState) => state.error
// );

