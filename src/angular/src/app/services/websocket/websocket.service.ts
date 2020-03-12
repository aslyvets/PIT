import {Injectable, OnDestroy} from '@angular/core';
import {$WebSocket} from 'angular2-websocket/angular2-websocket'
import {environment} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class WebsocketService implements OnDestroy {
  ws: $WebSocket;

  constructor() {
    this.ws = new $WebSocket(environment.WS_URL);

    this.ws.onMessage(
      (msg: MessageEvent) => {
        console.log("onMessage ", msg.data);
      },
      {autoApply: false}
    );

    this.ws.getDataStream().subscribe(
      (msg) => {
        console.log("next", msg.data);
        this.ws.close(false);
      },
      (msg) => {
        console.log("error", msg);
      },
      () => {
        console.log("complete");
      }
    );
  };

  ngOnDestroy(): void {
    this.ws.close(false);
  }

  send(message: object) {
    this.ws.send(message).subscribe(
      (msg)=> {
        console.log("next", msg.data);
      },
      (msg)=> {
        console.log("error", msg);
      },
      ()=> {
        console.log("complete from send");
      }
    );
  }
}
