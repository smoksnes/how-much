import { NgModule } from '@angular/core';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from "@angular/material/grid-list";
import { MatTreeModule } from "@angular/material/tree";
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [],

  imports: [
    MatSlideToggleModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatDividerModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatToolbarModule,
    MatInputModule,
    MatTreeModule,
    MatDialogModule,
    MatChipsModule
  ],
  exports: [
    MatSlideToggleModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatDividerModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatToolbarModule,
    MatInputModule,
    MatTreeModule,
    MatDialogModule,
    MatChipsModule
  ],
  providers: []
})
export class MaterialModule { }
