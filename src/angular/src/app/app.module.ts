import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {VideoComponent} from './components/video/video.component';
import {WebsocketService} from "./services/websocket/websocket.service";
import {MsgService} from "./services/msg/msg.service";
import {AppRoutingModule} from "./app-routing.module";
import { MainComponent } from './components/main/main.component';
import { PlayerOptionsComponent } from './components/player-options/player-options.component';
import {HttpClientModule} from "@angular/common/http";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { CreateComponent } from './components/create/create.component';
import {FormsModule} from "@angular/forms";
import { GamesComponent } from './components/games/games.component';
import { JoinComponent } from './components/join/join.component';
import { QuestionComponent } from './components/question/question.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    MainComponent,
    PlayerOptionsComponent,
    CreateComponent,
    GamesComponent,
    JoinComponent,
    QuestionComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    WebsocketService,
    MsgService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
