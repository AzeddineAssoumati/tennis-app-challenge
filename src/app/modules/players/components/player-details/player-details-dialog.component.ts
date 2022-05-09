import { Component, Inject } from '@angular/core';
import { IPlayer } from 'src/app/modules/players/models/players.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'player-details-content',
  templateUrl: './player-details-dialog.component.html',
  styleUrls: ['./player-details-dialog.component.scss']
})

export class PlayerDetailsDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public player: IPlayer) { }
}