import { Component, Input, OnDestroy } from '@angular/core';
import { IPlayers } from 'src/app/modules/players/models/players.model';
import { MatDialog } from '@angular/material/dialog';
import { PlayerDetailsDialogComponent } from 'src/app/modules/players/components/player-details/player-details-dialog.component';
import { PlayersService } from 'src/app/modules/players/services/players.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'player-list-content',
  template: `
      <mat-form-field class="search-form-field" appearance="fill">
        <input matInput type="text" [(ngModel)]="searchText" placeholder="Rechercher un joueur" autocomplete="off">
      </mat-form-field>

      <div *ngFor="let player of players | filter:'fullName':searchText" class="player">
        <player-card class="player-card" (click)="openPlayerDetailsDialog(player.id)" [player]="player"></player-card>
      </div>

      <ng-container *ngIf="loading">
        <div class="spinner">
          <mat-spinner></mat-spinner>
        </div>
      </ng-container>
  `,
  styleUrls: ['./list-content.component.scss']
})

export class PlayersListContentComponent implements OnDestroy {
  @Input() players: IPlayers[];
  public searchText: string; // filtre with player fullName
  public loading: boolean = false;

  private subs: Subscription = new Subscription();

  constructor(private dialog: MatDialog, private playersService: PlayersService) { }

  openPlayerDetailsDialog(id: any) {
    this.loading = true;
    const getPlayerSub = this.playersService.getPlayer(id as string).subscribe(player => {
      this.loading = false;
      this.dialog.open(PlayerDetailsDialogComponent, {
        data: player
      });
    });

    this.subs.add(getPlayerSub);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}