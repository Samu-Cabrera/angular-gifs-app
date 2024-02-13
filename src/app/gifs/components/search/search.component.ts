import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  //el decorador viewChild sirva para tener una referencia local del elemento
  @ViewChild('textTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;  //not null operator para indicar que va a existir el elemento

  constructor(private gifsServices: GifsService){}

  shearchGifs(): void{
    //obtener el valor 
    const newTag = this.tagInput.nativeElement.value;

    this.gifsServices.searchTag(newTag);

    this.tagInput.nativeElement.value = '';
  }

  
}
