import {Component} from '@angular/core';
import {GameService} from "../../services/game/game.service";
import {Router} from "@angular/router";

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
    private router: Router
  ) {
  }

  createGame() {
    this.gameService
      .createGame(this.gameName, this.authorName)
      .subscribe();
    this.router.navigate(['/games'])
  }
}
