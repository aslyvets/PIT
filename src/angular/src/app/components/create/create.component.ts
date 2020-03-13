import {Component} from '@angular/core';
import {GameService} from "../../services/game/game.service";
import {Router} from "@angular/router";
import {GameStateService} from "../../services/game-state.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  gameName: string;
  authorName: string;

  constructor(
    private gameService: GameService,
    private router: Router,
    private gameState: GameStateService
  ) {
  }

  createGame() {
    this.gameState.isAuthor = true;
    this.gameState.gameName = this.gameName;
    this.gameService
      .createGame(this.gameName, this.authorName)
      .subscribe();
    this.router.navigate(['/question'])
  }
}
