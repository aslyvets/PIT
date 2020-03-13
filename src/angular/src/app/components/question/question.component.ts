import {Component, OnInit} from '@angular/core';
import {GameStateService} from "../../services/game-state.service";
import {WebsocketService} from "../../services/websocket/websocket.service";
import {GameService} from "../../services/game/game.service";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  question: string;

  constructor(
    public gameState: GameStateService,
    private ws: WebsocketService,
    private gameService: GameService
  ) {
  }

  ngOnInit(): void {
    this.ws.send({"ping": 42})
  }

  postQuestion() {
    this.gameService.postQuestion(
      this.question,
      this.gameState.gameName)
  }
}
