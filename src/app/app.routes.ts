import { RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home.component";
import { NotFoundComponent } from "./components/not-found.component";

export const appRoutes = RouterModule.forRoot([
  { path: "", pathMatch: "full", redirectTo: "home" },
  {
    path: "",
    children: [
      { path: "home", component: HomeComponent },
      { path: "**", component: NotFoundComponent },
      {
        path: "players",
        loadChildren: () =>
          import("src/app/modules/players/players.module").then(
            (m) => m.PlayersModule
          ),
      },
    ],
  },
]);
