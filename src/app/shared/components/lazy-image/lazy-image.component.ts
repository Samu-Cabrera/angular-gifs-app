import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css']
})
export class LazyImageComponent implements OnInit{
  //los inputs son parametros que espera este componente
  @Input() public url!: string;

  @Input() public alt!: string;

  public hasLoaded: boolean = false;

  ngOnInit(): void {
    if(!this.url) throw new Error('URL is required');
  }

  onLoad(): void {
    this.hasLoaded = true;
  }
}
