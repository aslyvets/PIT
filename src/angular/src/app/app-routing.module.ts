import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./components/main/main.component";
import {PlayerOptionsComponent} from "./components/player-options/player-options.component";
import {CreateComponent} from "./components/create/create.component";
import {GamesComponent} from "./components/games/games.component";
import {JoinComponent} from "./components/join/join.component";


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'main', component: MainComponent},
  {path: 'options', component: PlayerOptionsComponent},
  {path: 'create', component: CreateComponent},
  {path: 'games', component: GamesComponent},
  {path: 'join', component: JoinComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
