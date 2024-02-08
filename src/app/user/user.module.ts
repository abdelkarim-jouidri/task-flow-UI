import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store, StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers/user.actions';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/effects/user.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('users', reducers),
    EffectsModule.forFeature([UserEffects])
  ]
})
export class UserModule { }
