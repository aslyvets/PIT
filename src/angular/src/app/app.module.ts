import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {VideoComponent} from './video/video.component';
import {WebsocketService} from "./websocket/websocket.service";
import {MsgService} from "./msg.service";
import {WebsocketModule} from "./websocket/websocket.module";
import {environment} from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    WebsocketModule.config({
      url: environment.WS_URL
    })
  ],
  providers: [
    WebsocketService,
    MsgService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
