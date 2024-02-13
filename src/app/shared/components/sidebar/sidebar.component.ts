import { Gifs } from 'src/app/gifs/interfaces/gifs.interfaces';
import { GifsService } from './../../../gifs/services/gifs.service';
import { Component } from '@angular/core';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private gifServices: GifsService){
  }

  get tags(): string[]{
    return this.gifServices.tagHistory;
  }

  searchTag(tag: string): void {
    this.gifServices.searchTag(tag);
  }
  

}
