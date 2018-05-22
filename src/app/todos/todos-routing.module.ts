import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodosComponent } from './todos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
  {
    path: '',
    component: TodosComponent,
    children: [
      { path: '', component: TodoListComponent },
      { path: ':id', component: TodoItemComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }
