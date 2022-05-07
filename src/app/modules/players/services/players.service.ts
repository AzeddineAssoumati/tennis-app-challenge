import { BackendService } from 'src/app/services/backend.service';
import { Injectable } from '@angular/core';
import { IPlayer, IPlayers, IStatistics } from 'src/app/modules/players/models/players.model';
import { Observable } from 'rxjs';
const BASE_URL = '/players';

@Injectable()
export class PlayersService {
  constructor(private backendService: BackendService) { }

  fetchPlayers(): Observable<{ players: IPlayers[], statistics: IStatistics }> {
    return this.backendService.get(`${BASE_URL}/list`);
  }

  getPlayer(id: string): Observable<IPlayer> {
    return this.backendService.get(`${BASE_URL}/${id}`);
  }

}