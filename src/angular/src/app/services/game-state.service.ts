import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameStateService {
  public gameName: string;
  public question: string;
  public isAuthor: boolean;

  constructor() { }
}
