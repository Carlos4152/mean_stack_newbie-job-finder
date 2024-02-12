import { ChangeDetectorRef, Component } from '@angular/core';
import { LoadingService } from './core/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private loadService: LoadingService, private cdr: ChangeDetectorRef){}
  
  loading: boolean = false;

 ngOnInit(): void {
  this.loadService.loading.subscribe(loading => {
    this.loading = loading;
    this.cdr.detectChanges();
  });
 }

}
