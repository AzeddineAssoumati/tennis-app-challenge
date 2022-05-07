// Modules imports
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

// services imports
import { BackendService } from "src/app/services/backend.service";

// Angular material imports
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

// Filters
import { FilterPipe } from 'src/app/modules/shared/pipes/filter.pipe';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatDialogModule
  ],
  declarations: [
    FilterPipe
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatDialogModule,
    FilterPipe
  ],
  providers: [BackendService],
})
export class SharedModule { }
