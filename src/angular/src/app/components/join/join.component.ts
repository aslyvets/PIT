import { Component, OnInit } from '@angular/core';
import {GameService} from "../../services/game/game.service";
import {GameStateService} from "../../services/game-state.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {
  playerName: string;
  gameName: string;

  constructor(
    private gameService: GameService,
    private gameState: GameStateService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.gameName = this.gameState.gameName;
  }

  joinGame() {
    this.gameState.isAuthor = false;
    this.gameService.joinGame(this.playerName, this.gameName);
    this.router.navigate(['/question'])
  }
}
