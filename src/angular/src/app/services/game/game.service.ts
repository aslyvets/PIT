import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private baseGameUrl: string = 'http://192.168.178.64:8888';
  private createGameSuffix: string = 'createGame';
  private playSuffix: string = 'play';

  constructor(
    private http: HttpClient,
  ) { }

  createGame(): Observable<any> {
    const url = `${this.baseGameUrl}/${this.createGameSuffix}`;
    const game = {
      name: "private"
    };
    return this.http.post(url, game, httpOptions);
  }

  play(): Observable<any> {
    const url = `${this.baseGameUrl}/${this.playSuffix}`;
    return this.http.get(url);
  }
}
