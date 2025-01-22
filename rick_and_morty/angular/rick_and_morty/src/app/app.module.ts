import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule, provideHttpClient, withFetch, withJsonpSupport } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPageComponent } from './main-page/main-page.component';

import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SeasonListComponent } from './season-list/season-list.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { ButtonRowComponent } from './button-row/button-row.component';
import { FormsModule }   from '@angular/forms'
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavBarComponent,
    FooterComponent,
    CardComponent,
    SideBarComponent,
    SeasonListComponent,
    CharacterListComponent,
    ButtonRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideHttpClient(
      withFetch(),
      withJsonpSupport()
    ),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
