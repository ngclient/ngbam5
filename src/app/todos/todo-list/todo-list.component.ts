import { Component } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export enum Status {
  completed = 1,
  remember = 2,
  working = 3
}

export class TodoListComponent {
  itemsSelected: any;
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
}


