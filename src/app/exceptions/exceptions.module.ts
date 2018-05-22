import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExceptionsRoutingModule } from './exceptions-routing.module';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';

@NgModule({
  imports: [
    CommonModule,
    ExceptionsRoutingModule
  ],
  declarations: [
    PageNotFoundComponent,
  ]
})
export class ExceptionsModule { }
