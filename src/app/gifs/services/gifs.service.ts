import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'; 
import { Gifs, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  public gifsList: Gifs[] = [];

  private services_url: string = 'https://api.giphy.com/v1/gifs';
  private _tagHistory: string[] = [];

  constructor(private http: HttpClient) {
    //se ejecuta al cargar la pag
    this.loadLocalStorage();
  }

  get tagHistory(){
    return [...this._tagHistory];
  }

  //organiza el historial
  organizeHistory(tag: string):void {
    tag = tag.toLowerCase();

    //borra tags duplicados
    if(this._tagHistory.includes(tag)){
      this._tagHistory = this.tagHistory.filter((oldTag) => oldTag !== tag);
    }

    this._tagHistory.unshift(tag);

    this._tagHistory = this.tagHistory.splice(0, 10);

    this.saveLocalStorage();
  }

  //almacena datos en el localstorage
  private saveLocalStorage(): void{
    localStorage.setItem('history', JSON.stringify(this._tagHistory));
  }
  //lee los datos 
  private loadLocalStorage():void {
    if(!localStorage.getItem('history')) return;

    this._tagHistory = JSON.parse( localStorage.getItem('history') ! );

    //busca al inicar la pagina el tag que esta en la posicion [0]
    if(this._tagHistory.length === 0) return;
    this.searchTag(this._tagHistory[0]);
  }

  searchTag(tag: string){
    if(tag.length === 0) return;

    this.organizeHistory(tag);

    const params = new HttpParams()
    .set('api_key', 'rQ7ALnXEYbGHEGo8VJbY0z5CI5M3DUTu')
    .set('q', tag)
    .set('limit', 10);
    //realiza la peticion
    this.http.get<SearchResponse>(`${ this.services_url }/search`, { params }).subscribe(res => {
      this.gifsList = res.data;
    });

  }
}
