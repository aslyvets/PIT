import {Component, OnInit} from '@angular/core';
import {GameService} from "../../services/game/game.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    private gameService: GameService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  joinGame() {

  }

  createGame() {
    let observable = this.gameService.createGame();
    observable.subscribe(res => {
      console.log(res);
      console.log(res.name);
    })
    this.router.navigate(['/options'])
  }
}
