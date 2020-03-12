import {Player} from "./player";

export class Game {
  name: string;
  author: Player;
  players: Player[] = new Array<Player>();

  constructor(
    name: string,
    authorName: string
  ) {
    this.name = name;
    this.author = new Player(authorName);
    this.players.push(this.author);
  }
}
