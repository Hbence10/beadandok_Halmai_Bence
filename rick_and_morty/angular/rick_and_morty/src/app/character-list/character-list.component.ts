import { hideDetailsPanel } from './../../.animations/hideDetailsPanel.animation';
import { cardLoading } from './../../.animations/cardLoading.animation';
import { showDetailsPanel } from '../../.animations/showDetailsPanel.animation';
import { animation, transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';
import { Character } from '../../.models/character.model';

@Component({
  selector: 'app-character-list',
  standalone: false,
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css',
  animations: [
    trigger("showDetails", [
      transition(":enter", [useAnimation(showDetailsPanel)]),
      transition(":leave", [useAnimation(hideDetailsPanel)])
    ]),

    trigger("cardLoading", [
      transition(":enter", [useAnimation(cardLoading)])
    ])
  ]
})
export class CharacterListComponent implements OnInit{

  constructor(public mainsService : MainServiceService){}

  ngOnInit(): void {
    this.mainsService.actualPageName = "characters"
    this.mainsService.setButtonNumbers(1);
    this.mainsService.apiCall().subscribe(response => this.mainsService.setCharacter(response))
  }
}
