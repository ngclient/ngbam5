import { BreakpointObserver, MediaMatcher } from '@angular/cdk/layout';
import { CoreModule } from './../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';

export const COMPONENT_BUILER = [
  LayoutComponent,
];

@NgModule({
  imports: [
    CommonModule,
    CoreModule
  ],
  declarations: [...COMPONENT_BUILER],
  exports: [...COMPONENT_BUILER],
  providers: [BreakpointObserver, MediaMatcher]
})
export class SharedModule { }
