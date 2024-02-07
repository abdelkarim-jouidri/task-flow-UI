import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { UsersComponent } from './shared/users/users.component';
import { TasksComponent } from './shared/tasks/tasks.component';
import { AddUserComponent } from './shared/add-user/add-user.component';
const routes: Routes = [
  {path: '', component : HomeComponent},
  {path : 'users', component : UsersComponent},
  {path : 'tasks', component : TasksComponent},
  {path : 'add-user', component : AddUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
