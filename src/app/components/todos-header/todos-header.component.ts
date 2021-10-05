import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { StorageService } from 'src/app/storage.service';
import { iTodos } from 'src/app/todos-interface';

@Component({
  selector: 'app-todos-header',
  templateUrl: './todos-header.component.html',
  styleUrls: ['./todos-header.component.css'],
})
export class TodosHeaderComponent implements OnInit {
  namespace: string = 'todos-app-storage';
  text: string;
  toggleAllCompleted: boolean = false;
  isDisabled: boolean;

  @Input() todos: iTodos[];
  @Output() onAddTodo: EventEmitter<string> = new EventEmitter();
  @Output() onToggleAllTodos: EventEmitter<any> = new EventEmitter();
  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    this.todos = this.storageService.getTodos(this.namespace);
    this.isToggleAllDisabled();
  }

  onSubmit(): void {
    this.onAddTodo.emit(this.text);
    this.text = '';
    this.isToggleAllDisabled();
  }

  onClick($event): void {
    this.onToggleAllTodos.emit($event);
    this.toggleAllCompleted = !this.toggleAllCompleted;
  }

  isToggleAllDisabled(): void {
    this.todos = this.storageService.getTodos(this.namespace);
    this.todos.length > 0
      ? (this.isDisabled = false)
      : (this.isDisabled = true);
  }
}
