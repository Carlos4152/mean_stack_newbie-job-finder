import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



import { JobsComponent } from './pages/jobs/jobs.component';
import { ApplicationsComponent } from './pages/applications/applications.component';
import { SupportComponent } from './pages/support/support.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdminComponent } from './admin.component';
import { JobdetailsComponent } from './components/jobdetails/jobdetails.component';

@NgModule({
  declarations: [
    JobsComponent,
    ApplicationsComponent,
    SupportComponent,
    ProfileComponent,
    NavbarComponent,
    AdminComponent,
    JobdetailsComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    RouterModule.forChild([]),
    SharedModule
  ]
})
export class AdminModule { }
