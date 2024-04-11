import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './dashboard/users/users.component';
import { UserDetailsComponent } from './dashboard/user-details/user-details.component';
import { HomeComponent } from './dashboard/home/home.component';

const routes: Routes = [
  {path: "" , redirectTo: "home" , pathMatch: "full"},
  {path: "home" , component : HomeComponent},
  {path: "users" , component : UsersComponent},
  {path: "userDetails/:id" , component : UserDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
