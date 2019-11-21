import { NgModule } from '@angular/core';



import { HeaderRoutingModule } from './header-routing.module';



// import { HeaderComponent } from './header.component';
// import { HeaderAnalyticsComponent } from './header-analytics/header-analytics.component';
// import { HeaderHomeComponent } from './header-home/header-home.component';
// import { HeaderReportsComponent } from './header-reports/header-reports.component';



 @NgModule({
   declarations: [
                  // HeaderComponent,
                  // HeaderAnalyticsComponent,
                  // HeaderHomeComponent,
                  // HeaderReportsComponent
   ],
   imports:[
     HeaderRoutingModule
   ],
   providers:[
   ]
 })
export class HeaderModule{}
