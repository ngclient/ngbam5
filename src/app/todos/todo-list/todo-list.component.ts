import { Component } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';



export enum Status {
  completed = 1,
  remember = 2,
  working = 3
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent {
  itemsSelected: any;
  showDialog = false;
  editingTodo: any = null;
  fieldValue = '';
  todoList: any = [];
  okButtonText = 'Create task';
  notes = [
    {
      name: 'Đừng để thời gian bên nhau là thói quen',
      checked: false,
      status: Status.completed
    },
    {
      name: 'yêu chậm lại 1 chút',
      checked: true
    },
    {
      name: 'Đừng để yêu thương kia giờ là nỗi đau',
      checked: false,
      status: Status.completed
    },
    {
      name: 'Cô đơn về nơi căn phòng ấy',
      checked: false,
      status: Status.completed
    },
  ];

  onSelectItem = (e: MatSelectionListChange) => {
    this.itemsSelected = e.option.getLabel();
  }



  todoDialog(todo = null) {
    this.okButtonText = 'Create task';
    this.fieldValue = '';
    this.editingTodo = todo;
    if (todo) {
      this.fieldValue = todo.title;
      this.okButtonText = 'Edit task';
    }
    this.showDialog = true;
  }

  remove(index: number) {
    this.todoList.splice(index, 1);
  }

  editTodo(title) {
    this.editingTodo.title = title;
  }

  updateTodo(title) {
    if (title) {
      title = title.trim();
      if (this.editingTodo) {
        this.editTodo(title);
      } else {
        this.addTodo(title);
      }
    }
    this.hideDialog();
  }

  addTodo(title) {
    const todo = {title: title, completed: false};
    this.todoList.push(todo);
  }

  hideDialog() {
    this.showDialog = false;
    this.editingTodo = null;
    this.fieldValue = null; // make sure Input is new
  }
}
