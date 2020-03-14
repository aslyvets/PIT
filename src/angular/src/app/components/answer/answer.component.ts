import {Component, OnDestroy, OnInit} from '@angular/core';
import {WebsocketService} from "../../services/websocket/websocket.service";

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit, OnDestroy {
  answer: string;
  question: string;

  constructor(
    private ws: WebsocketService
  ) {}

  ngOnInit(): void {
    this.ws.connect();
  }

  ngOnDestroy(): void {
    this.ws.disconnect();
  }

  postAnswer() {

  }
}
