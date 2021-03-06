import { Component, Input } from "@angular/core";
import { IPlayer } from "src/app/modules/players/models/players.model";

@Component({
  selector: 'player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})

export class PlayerCardComponent {
  @Input() player: IPlayer;

  constructor() { }
}