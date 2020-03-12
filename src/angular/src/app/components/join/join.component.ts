import { Component, OnInit } from '@angular/core';
import {GameService} from "../../services/game/game.service";

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {
  playerName: string;
  gameName: string = "123";

  constructor(
    private gameService: GameService,
  ) { }

  ngOnInit(): void {
  }

  joinGame() {
    this.gameService.joinGame(this.playerName, this.gameName);
  }
}
