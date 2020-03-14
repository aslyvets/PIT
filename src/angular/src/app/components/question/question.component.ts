import {Component, OnDestroy, OnInit} from '@angular/core';
import {GameStateService} from "../../services/game-state.service";
import {WebsocketService} from "../../services/websocket/websocket.service";
import {GameService} from "../../services/game/game.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  question: string;

  constructor(
    public gameState: GameStateService,
    private gameService: GameService,
    private route: Router
  ) {
  }

  postQuestion() {
    this.gameService.postQuestion(
      this.question,
      this.gameState.gameName);
    this.route.navigate(['/answer']);
  }
}
