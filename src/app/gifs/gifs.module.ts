import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { HomePageComponent } from './pages/home-page.component';
import { SearchComponent } from './components/search/search.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { GifsCardComponent } from './components/gifs-card/gifs-card.component';




@NgModule({
  declarations: [
    HomePageComponent,
    SearchComponent,
    CardListComponent,
    GifsCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class GifsModule { }
