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
  @Output() isDisabled: boolean = false;
  editModeOn: number = null;
  editTextValue: string;
  constructor() {}

  ngOnInit(): void {}

  toggleTodo(id: string) {
    this.onToggleTodo.emit(id);
    this.isDisabled = !this.isDisabled;
  }

  deleteTodo(id: string): void {
    this.onDeleteTodo.emit(id);
  }

  toggleEditModeOn(todo: iTodos, todoIndex): void {
    this.editModeOn = todoIndex;
    this.editTextValue = todo.text;
  }

  editTodo(id: string): void {
    this.editModeOn = null;
    const editData = {
      id: id,
      text: this.editTextValue,
    };
    this.onEditTodo.emit(editData);
  }
}
