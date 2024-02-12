import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteRoutingModule } from './website-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServicesComponent } from './pages/services/services.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CtaComponent } from './components/cta/cta.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { FormComponent } from './components/form/form.component';
import { UsSectionComponent } from './components/us-section/us-section.component';
import { WebsiteComponent } from './website.component';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { SignupComponent } from 'src/app/auth/signup/signup.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent,
    NavbarComponent,
    FooterComponent,
    CtaComponent,
    TestimonialComponent,
    FormComponent,
    UsSectionComponent,
    WebsiteComponent, 
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    ReactiveFormsModule,
    RouterModule.forChild([]),
    SharedModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent,
    NavbarComponent,
    FooterComponent,
    CtaComponent,
    TestimonialComponent,
    FormComponent,
    UsSectionComponent,
    WebsiteComponent
  ]
})
export class WebsiteModule { }
