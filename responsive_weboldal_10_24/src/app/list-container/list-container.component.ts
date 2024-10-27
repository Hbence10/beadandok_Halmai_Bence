import { Anime } from './../.models/anime.model';
import { Component, OnInit } from '@angular/core';
import { FrontendService } from '../frontend.service';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrl: './list-container.component.css'
})
export class ListContainerComponent implements OnInit{
  rows : Anime[][] = []

  constructor(public frontend: FrontendService){}

  ngOnInit(): void {
    this.rows = []
    for(let i = 0; i<this.frontend.animeList.length; i+=3){
      this.rows.push(this.frontend.animeList.slice(i, i+3))
    }

    console.log(this.rows)
  }
}
