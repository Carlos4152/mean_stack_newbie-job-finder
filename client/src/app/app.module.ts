import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { WebsiteModule } from './modules/website/website.module';
import { AdminModule } from './modules/admin/admin.module';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { InterceptorsInterceptor } from './core/interceptors/interceptors.interceptor';
import { UserService } from './core/services/user.service';
import { JobsService } from './core/services/jobs.service';
import { SharedModule } from './shared/shared.module';
import { LoadingService } from './core/services/loading.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WebsiteModule,
    AdminModule,
    SharedModule,
    HttpClientModule,
    RouterModule.forRoot([])
  ],
  providers: [
    LoadingService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorsInterceptor,
      multi: true
    },
    UserService,
    JobsService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
}
