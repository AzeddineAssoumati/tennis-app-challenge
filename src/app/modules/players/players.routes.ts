import { RouterModule } from "@angular/router";
import { PlayersListContainerComponent } from "src/app/modules/players/components/players-list/container/list-container.component";

export const PlayersRoutes = RouterModule.forChild([
  {
    path: "",
    component: PlayersListContainerComponent,
  }
]);
