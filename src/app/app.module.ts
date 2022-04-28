import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { appRoutes } from "./app.routes";
import { HomeComponent } from "./components/home.component";
import { NotFoundComponent } from "./components/not-found.component";
import { SharedModule } from "./modules/shared/shared.module";

@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent],
  imports: [BrowserModule, appRoutes, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
