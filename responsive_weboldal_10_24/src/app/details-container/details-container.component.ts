import { Component } from '@angular/core';
import { FrontendService } from '../frontend.service';

@Component({
  selector: 'app-details-container',
  templateUrl: './details-container.component.html',
  styleUrl: './details-container.component.css'
})
export class DetailsContainerComponent {

  constructor(public frontend: FrontendService){}
}
