import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/dashboard/home/home.component';
import { AuthGuard } from './services/auth-guard';
import { ContentComponent } from './components/content/content.component';

const routes: Routes = [
  {
    // path: '', component: ContentComponent, canActivate: [AuthGuard], children: [
      path: 'logged', component: ContentComponent, children: [
      { path: 'home', component: HomeComponent },
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
