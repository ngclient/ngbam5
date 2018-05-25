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
  MatCardModule,
  MatSidenavModule,
  MatMenuModule,
  MatTableModule,
  MatListModule
} from '@angular/material';


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
