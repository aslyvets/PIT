import {Injectable, OnInit} from '@angular/core';
import {WebsocketService} from '../websocket/websocket.service';

@Injectable({
  providedIn: 'root'
})
export class MsgService implements OnInit {

  constructor(private wsService: WebsocketService) {
  }

  private message = {
    author: "me",
    message: "hello"
  };

  ngOnInit() {
  }

  public sendText(): void {
    this.wsService.send(this.message);
  }
}
