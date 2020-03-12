import { Component, OnInit } from '@angular/core';
import {GameService} from "../../services/game/game.service";
import {Game} from "../../models/game";

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games: Game[];

  constructor(
    private gameService: GameService
  ) { }

  ngOnInit(): void {
    this.gameService.getGames().subscribe(games => {
      console.log(games);
      this.games = games
    })
  }

}
