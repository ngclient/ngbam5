import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatFormFieldModule,
  MatTableDataSource,
  MatToolbarModule,
  MatGridListModule,
  MatCardModule
} from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';


export const MAT_MODULES = [
  MatButtonModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatMenuModule,
  MatIconModule,
  MatTableModule,
  MatListModule,
  MatToolbarModule,
  MatGridListModule,
  MatCardModule,
  MatFormFieldModule
];

@NgModule({
  imports: [
    CommonModule,
    ...MAT_MODULES
  ],
  declarations: [],
  exports: [...MAT_MODULES]
})
export class CoreModule { }
