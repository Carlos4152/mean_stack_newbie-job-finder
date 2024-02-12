import { Component } from '@angular/core';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html'
})
export class WebsiteComponent {



  onActivate(event : any){
    window.scrollTo(0,0) 
  }
}
