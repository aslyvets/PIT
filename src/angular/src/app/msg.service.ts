import {Injectable, OnInit} from '@angular/core';
import {WebsocketService} from './websocket/websocket.service';
import {Observable} from "rxjs";
import {WS} from './websocket/websocket.events';

export interface IMessage {
  id: number;
  text: string;
}

@Injectable({
  providedIn: 'root'
})
export class MsgService implements OnInit {

  private messages$: Observable<IMessage[]>;
  private counter$: Observable<number>;
  private texts$: Observable<string[]>;

  constructor(private wsService: WebsocketService) {
  }

  private message = {
    author: "me",
    message: "hello"
  };

  ngOnInit() {

    // get messages
    this.messages$ = this.wsService.on<IMessage[]>(WS.ON.MESSAGES);

    // get counter
    this.counter$ = this.wsService.on<number>(WS.ON.COUNTER);

    // get texts
    this.texts$ = this.wsService.on<string[]>(WS.ON.UPDATE_TEXTS);
  }


  public sendText(): void {
    this.wsService.send(WS.SEND.SEND_TEXT, this.message);
  }
}
