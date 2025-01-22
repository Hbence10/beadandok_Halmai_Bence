import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../../.models/character.model';
import { transition, trigger, useAnimation } from '@angular/animations';
import { hideDetailsPanel } from '../../.animations/hideDetailsPanel.animation';
import { showDetailsPanel } from '../../.animations/showDetailsPanel.animation';
import { cardLoading } from '../../.animations/cardLoading.animation';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-main-page',
  standalone: false,
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
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
export class MainPageComponent implements OnInit{
  favCharacters : Character[] = []

  constructor(public http : HttpClient, public main : MainServiceService){
    this.apiCall().subscribe(response => this.setCharacters(response))
  }

  ngOnInit(): void {
    this.main.actualPageName = "home"
  }

  apiCall() : Observable<any>{
    return this.http.get<any>("https://rickandmortyapi.com/api/character/1,2,244")
  }

  setCharacters(response : any[]){
    response.forEach(characterObject => {
      this.favCharacters.push(new Character(characterObject.id, characterObject.name, characterObject.status, characterObject.species, characterObject.type, characterObject.gender, characterObject.origin.name, characterObject.location.name, characterObject.image, characterObject.episode))
    });
  }
}
