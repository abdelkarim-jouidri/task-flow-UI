import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store, StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers/user.actions';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('users', reducers)
  ]
})
export class UserModule { }
