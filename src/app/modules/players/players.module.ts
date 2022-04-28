import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { PlayersRoutes } from "./players.routes";

@NgModule({
  imports: [SharedModule, PlayersRoutes],
  declarations: [],
  providers: [],
})
export class PlayersModule {}
