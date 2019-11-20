import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HeaderComponent } from './common/header/header.component';



import { HeaderModule } from './common/header/header.module';



const routes: Routes = [
  {path: 'login',  component: LoginComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            HeaderModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
