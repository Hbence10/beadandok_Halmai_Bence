import { RouterOutlet } from '@angular/router';
import { MainServiceService } from './main-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rick_and_morty';

  constructor(public MainServiceService : MainServiceService){}
}
