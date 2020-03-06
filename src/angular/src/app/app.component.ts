import {Component} from '@angular/core';
import {MsgService} from "./msg.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pit';

  constructor(private chatService: MsgService) {}

  sendMsg() {
    console.log("New msg send from client");
    this.chatService.sendText();
  }
}
