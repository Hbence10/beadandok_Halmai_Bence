import { Component } from '@angular/core';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-nav-bar',
  standalone: false,
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})

export class NavBarComponent {
  showInput: boolean = false
  showFilter: boolean = false
  testSelect : string = ""

  constructor(public main : MainServiceService){}

  showSearchInput(){
    this.showInput = !this.showInput
    if (!this.showInput){
      this.showFilter = false
    }
  }

  searchCharacter(){
    this.main.actualPage = 1
    this.main.apiCall().subscribe(response => this.main.setCharacter(response))
    this.main.setButtonNumbers(1);
  }
}
