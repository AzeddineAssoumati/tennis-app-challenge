import { NgModule } from '@angular/core';
import { PlayersRoutes } from './players.routes';
import { PlayersService } from 'src/app/modules/players/services/players.service';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { PlayerCardComponent } from 'src/app/modules/players/components/player-card/player-card.component';
import { PlayersListContainerComponent } from 'src/app/modules/players/components/players-list/container/list-container.component';
import { PlayersListContentComponent } from 'src/app/modules/players/components/players-list/content/list-content.component';

@NgModule({
  imports: [SharedModule, PlayersRoutes],
  declarations: [
    PlayerCardComponent,
    PlayersListContainerComponent,
    PlayersListContentComponent
  ],
  providers: [
    PlayersService
  ],
})
export class PlayersModule {
  constructor() { }
}
