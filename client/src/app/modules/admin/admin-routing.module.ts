import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JobsComponent } from './pages/jobs/jobs.component';
import { ApplicationsComponent } from './pages/applications/applications.component';
import { SupportComponent } from './pages/support/support.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AdminComponent } from './admin.component';
import { JobdetailsComponent } from './components/jobdetails/jobdetails.component';
import { Guard } from 'src/app/core/guard.guard';

const routes: Routes = [

  {
    path: '',
    component: AdminComponent,
    canActivate: [Guard],
    children: [
      {
        path: 'jobs',
        component: JobsComponent,
        canActivate: [Guard],
      },
      {
        path: 'applications',
        component: ApplicationsComponent,
        canActivate: [Guard],
      },
      {
        path: 'support',
        component: SupportComponent,
        canActivate: [Guard]
      },
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [Guard]
      },
      {
        path: 'jobs/:appId',
        component: JobdetailsComponent,
        canActivate: [Guard]
      },
      { path: '', redirectTo: "jobs", pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ]
})


export class AdminRoutingModule { }
