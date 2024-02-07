import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { HomeComponent } from './shared/home/home.component';
import { UsersComponent } from './shared/users/users.component';
import { TasksComponent } from './shared/tasks/tasks.component';
import { AddUserComponent } from './shared/add-user/add-user.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { userReducer } from './shared/users/reducers/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './shared/users/effects/user.effects';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    UsersComponent,
    TasksComponent,
    AddUserComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    StoreModule.forRoot({users : userReducer}),
    EffectsModule.forRoot([UserEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
