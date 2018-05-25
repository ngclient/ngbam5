import { CoreModule } from './../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';

import { TodosRoutingModule } from './todos-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';
import { DialogComponent } from './dialog/dialog.component';

export const COMPONENTS_TODO = [
  TodosComponent,
  TodoListComponent,
  TodoItemComponent,
  DialogComponent
];

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    SharedModule,
    TodosRoutingModule
  ],
  declarations: [...COMPONENTS_TODO],
})
export class TodosModule { }
