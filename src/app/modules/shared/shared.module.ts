import { NgModule } from "@angular/core";
import { BackendService } from "src/app/services/backend.service";
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    MatIconModule
  ],
  declarations: [],
  exports: [
    MatIconModule
  ],
  providers: [BackendService],
})
export class SharedModule { }
