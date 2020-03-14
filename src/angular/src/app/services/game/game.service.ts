import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
import {Game} from "../../models/game";
import {Player} from "../../models/player";

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
  // private baseGameUrl: string = 'http://192.168.178.64:8888';
  private baseGameUrl: string = 'http://localhost:8080';
  private createGameSuffix: string = 'createGame';
  private gameListSuffix: string = 'games';
  private joinGameSuffix: string = 'join';
  private questionSuffix: string = 'question';

  constructor(
    private http: HttpClient,
  ) { }

  getGames(): Observable<any> {
    const url = `${this.baseGameUrl}/${this.gameListSuffix}`;

    return this.http.get<Game[]>(url);
  }

  createGame(gameName: string, authorName: string): Observable<any> {
    const url = `${this.baseGameUrl}/${this.createGameSuffix}`;
    const game = new Game(gameName, authorName);

    return this.http.post(url, game, httpOptions);
  }

  joinGame(playerName: string, gameName: string) {
    const url = `${this.baseGameUrl}/${this.joinGameSuffix}`;
    const player = new Player(playerName);

    const joinRequest = {
      gameName: gameName,
      player: player
    };

    return this.http.post(url, joinRequest, httpOptions).subscribe();
  }

  postQuestion(question: string,
               gameName: string) {
    const url = `${this.baseGameUrl}/${this.questionSuffix}`;

    const postQuestion = {
      question: question,
      gameName: gameName
    };

    return this.http.post(url, postQuestion, httpOptions).subscribe(it => console.log(it));
  }
}
