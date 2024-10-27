import { Component } from '@angular/core';
import { FrontendService } from '../frontend.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(public frontend: FrontendService){}
}
