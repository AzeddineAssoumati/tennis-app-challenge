import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';

export const appRoutes = RouterModule.forRoot([
  { path: "home", component: HomeComponent },
  {
    path: "players",
    loadChildren: () =>
      import("src/app/modules/players/players.module").then(
        (m) => m.PlayersModule
      ),
  },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "**", component: NotFoundComponent }
]);
