import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html'
})
export class WebsiteComponent {

  constructor(private router:Router){}

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event) => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    })
    
  }

}
