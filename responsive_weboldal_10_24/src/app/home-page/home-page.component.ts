import { Component } from '@angular/core';
import { FrontendService } from '../frontend.service';
import { Anime } from '../.models/anime.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  constructor(public frontend : FrontendService, public router : Router){}

  // Adott anime detailsenek megtekintese:
  checkAnime(anime : Anime){
    this.frontend.selectedAnime = anime
    this.router.navigate(["details"])
  }
}
