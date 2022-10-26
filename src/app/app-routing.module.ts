import { AddArticleComponent } from './articles/add-article/add-article.component';
import { ProfileComponent } from './profile/profile.component';
import { MyArticlesComponent } from './articles/my-articles/my-articles.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'user', component: UserComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'my-articles', component: MyArticlesComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'add-article', component: AddArticleComponent},
  {path: '', redirectTo: 'user', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
