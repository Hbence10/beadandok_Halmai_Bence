import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ListContainerComponent } from './list-container/list-container.component';
import { TopListComponent } from './top-list/top-list.component';
import { DetailsContainerComponent } from './details-container/details-container.component';

const routes: Routes = [
  {path: "", component: HomePageComponent},
  {path: "home", component: HomePageComponent},
  {path: "myList", component: ListContainerComponent},
  {path: "topList", component: TopListComponent},
  {path: "details", component: DetailsContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
