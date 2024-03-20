import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './components/book/book.component';
import { ContentComponent } from './components/content/content.component';
import { HomeComponent } from './components/dashboard/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    // path: '', component: ContentComponent, canActivate: [AuthGuard], children: [
      path: 'logged', component: ContentComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'book', component: BookComponent },
      { path: '**', redirectTo: '/home' }
    ]
  },
  { path: 'login', component: LoginComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
