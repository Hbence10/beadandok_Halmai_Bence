import { Router } from '@angular/router';
import { FrontendService } from '../frontend.service';
import { Anime } from './../.models/anime.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() anime : Anime;

  constructor(public frontend : FrontendService, public router : Router){}

  // Az adott anime detailsenek megtekintese:
  checkAnime(anime : Anime){
    this.frontend.selectedAnime = anime
    this.router.navigate(["details"])
  }
}
