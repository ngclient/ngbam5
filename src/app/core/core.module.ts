import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatFormFieldModule,
  MatTabsModule,
  MatToolbarModule,
  MatGridListModule,
  MatCardModule,
  MatSidenavModule,
  MatMenuModule,
  MatTableModule,
  MatListModule,
  MatInputModule,
} from '@angular/material';


export const MAT_MODULES = [
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatFormFieldModule,
  MatTabsModule,
  MatToolbarModule,
  MatGridListModule,
  MatCardModule,
  MatSidenavModule,
  MatMenuModule,
  MatTableModule,
  MatListModule,
  MatInputModule
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
