import { Component, OnInit } from '@angular/core';
import {GameService} from "../../services/game/game.service";
import {Game} from "../../models/game";
import {GameStateService} from "../../services/game-state.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games: Game[];

  constructor(
    private gameService: GameService,
    private gameState: GameStateService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.gameService.getGames().subscribe(games => {
      this.games = games
    })
  }

  join(gameName: string) {
    this.gameState.gameName = gameName;
    this.router.navigate(['/join'])
  }
}
