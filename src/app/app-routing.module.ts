import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HeaderComponent } from './common/header/header.component';






const routes: Routes = [
  {path: 'login',  component: LoginComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: "full"},
  {path: 'dashboard', loadChildren: './common/header/header.module#HeaderModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
