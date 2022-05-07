import { Component, OnInit } from '@angular/core';
import { IPlayers, IStatistics } from 'src/app/modules/players/models/players.model';
import { Observable } from 'rxjs';
import { PlayersService } from 'src/app/modules/players/services/players.service';

@Component({
  selector: 'players-list-container',
  template: `
    <div  *ngIf="(players$ | async) as dataSource; else loading" class="players-list-container">

        <player-list-content [players]="dataSource.players" class="player-list-content"></player-list-content>

        <div>
          <!-- <players-statistics class="players-statistics" [statistics]="dataSource.statistics"></players-statistics> -->
        </div>
        
    </div>

    <ng-template #loading>
      <div class="spinner">
        <mat-spinner></mat-spinner>
      </div>
    </ng-template>
  `,
  styleUrls: ['./list-container.component.scss']
})

export class PlayersListContainerComponent implements OnInit {

  public players$: Observable<{ players: IPlayers[], statistics: IStatistics }>;

  constructor(private playersService: PlayersService) { }

  ngOnInit(): void {
    this.players$ = this.playersService.fetchPlayers();

    this.players$.subscribe(data => console.log(data))
  }
}