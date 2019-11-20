import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { Routes,RouterModule } from '@angular/router';



import { HeaderComponent } from './header.component';
import { HeaderAnalyticsComponent } from './header-analytics/header-analytics.component';
import { HeaderHomeComponent } from './header-home/header-home.component';
import { HeaderReportsComponent } from './header-reports/header-reports.component';




const routes: Routes = [
  { path: 'dashboard', component: HeaderComponent,
  children: [
    { path: 'analytics', component: HeaderAnalyticsComponent},
    { path: 'home', component: HeaderHomeComponent},
    { path: 'reports', component: HeaderReportsComponent}
  ]
 }
]

 @NgModule({
   declarations: [
                  HeaderComponent,
                  HeaderAnalyticsComponent,
                  HeaderHomeComponent,
                  HeaderReportsComponent
   ],
   imports:[
     CommonModule,
     RouterModule.forChild(routes),
   ],
   providers:[
   ]
 })
export class HeaderModule{}
