import { Component, OnInit } from '@angular/core';
import {GameService} from "../../services/game/game.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
  }

  joinGame() {

  }

  createGame() {
    let observable = this.gameService.createGame();
    observable.subscribe(res => {
      console.log("response: " + res);
    })
  }
}
