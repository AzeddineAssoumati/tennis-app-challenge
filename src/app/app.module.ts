import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "src/app/app.component";
import { appRoutes } from "src/app/app.routes";
import { HomeComponent } from "src/app/components/home/home.component";
import { NotFoundComponent } from "src/app/components/not-found/not-found.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from "src/app/modules/shared/shared.module";
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent],
  imports: [BrowserModule, SharedModule, appRoutes, BrowserAnimationsModule, NgChartsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
