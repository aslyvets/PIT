import {Injectable} from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import {environment} from "../../../environments/environment";
import {GameStateService} from "../game-state.service";

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  topic: string = "/topic/game";
  stompClient: any;

  constructor(
    private gameState: GameStateService
  ) {
  };

  connect() {
    console.log("Initialize WebSocket Connection");
    let ws = new SockJS(environment.WS_URL);
    this.stompClient = Stomp.over(ws);
    const _this = this;
    _this.stompClient.connect({}, function (frame) {
      _this.stompClient.subscribe(_this.topic, function (sdkEvent) {
        _this.onMessageReceived(sdkEvent);
      });
      //_this.stompClient.reconnect_delay = 2000;
    }, this.errorCallBack);
  };

  disconnect() {
    if (this.stompClient !== null) {
      this.stompClient.disconnect();
    }
    console.log("Disconnected");
  }

  // on error, schedule a reconnection attempt
  errorCallBack(error) {
    console.log("errorCallBack -> " + error);
    setTimeout(() => {
      this.connect();
    }, 5000);
  }

  send(message) {
    console.log("calling logout api via web socket");
    this.stompClient.send("/app/game", {}, JSON.stringify(message));
  }

  onMessageReceived(message) {

    console.log("Message Recieved from Server :: " + message);
    // this.appComponent.handleMessage(JSON.stringify(message.body));
  }
}
