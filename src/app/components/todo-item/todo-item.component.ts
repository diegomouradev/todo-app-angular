import { Component, Input, OnInit, Output } from '@angular/core';
import { iTodos } from 'src/app/todos-interface';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todos: iTodos[];
  @Output() onToggleTodo: EventEmitter<string> = new EventEmitter();
  @Output() onDeleteTodo: EventEmitter<string> = new EventEmitter();
  @Output() onEditTodo: EventEmitter<{}> = new EventEmitter();
  editModeOff: boolean = true;
  editTextValue: string;
  constructor() {}

  ngOnInit(): void {}

  toggleTodo(id: string) {
    this.onToggleTodo.emit(id);
  }

  deleteTodo(id: string): void {
    this.onDeleteTodo.emit(id);
    this.editModeOff = true;
  }

  toggleEditModeOn(text: string): void {
    this.editModeOff = false;
    this.editTextValue = text;
  }

  editTodo(id: string): void {
    this.editModeOff = true;
    const editData = {
      id: id,
      text: this.editTextValue,
    };
    this.onEditTodo.emit(editData);
  }
}
