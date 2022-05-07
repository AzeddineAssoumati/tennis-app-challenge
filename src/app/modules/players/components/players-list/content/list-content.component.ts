import { Component, Input, OnDestroy } from '@angular/core';
import { IPlayers } from 'src/app/modules/players/models/players.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'player-list-content',
  template: `
      <mat-form-field class="search-form-field" appearance="fill">
        <input matInput type="text" [(ngModel)]="searchText" placeholder="Rechercher un joueur" autocomplete="off">
      </mat-form-field>

      <div *ngFor="let player of players | filter:'fullName':searchText" class="player">
        <player-card class="player-card" [player]="player"></player-card>
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

  constructor() { }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}