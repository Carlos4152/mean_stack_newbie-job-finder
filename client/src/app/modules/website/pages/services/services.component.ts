import { Component } from '@angular/core';
import { ServicesData } from 'src/app/core/services/service.data';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

services: any = ServicesData;

}
