import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/todos', pathMatch: 'full' },
  { path: 'todos', loadChildren: './todos/todos.module#TodosModule' },
  { path: 'exception', loadChildren: './exceptions/exceptions.module#ExceptionsModule' },
  { path: '**', redirectTo: '/exception/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
