import { LoginComponent } from './auth/login/login.component';
import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'user', component: UserComponent},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'user', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
