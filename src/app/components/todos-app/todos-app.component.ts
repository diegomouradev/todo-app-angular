import { Component, OnInit, Output } from '@angular/core';
import { StorageService } from 'src/app/storage.service';
import { UtilitiesService } from 'src/app/utilities.service';
import { iTodos } from '../../todos-interface';

@Component({
  selector: 'app-todos-app',
  templateUrl: './todos-app.component.html',
  styleUrls: ['./todos-app.component.css'],
})
export class TodosAppComponent implements OnInit {
  namespace: string = 'todos-app-storage';
  @Output() todos: iTodos[];

  constructor(
    private storageService: StorageService,
    private utilitiesService: UtilitiesService
  ) {}

  ngOnInit(): void {
    this.todos = this.storageService.getTodos(this.namespace);
  }

  addNewTodo($event): void {
    const newTodo: iTodos = {
      id: this.utilitiesService.idGenerator(),
      text: $event,
      isCompleted: false,
    };
    this.todos.push(newTodo);
    this.storageService.setTodos(this.namespace, this.todos);
  }

  toggleTodo($event): void {
    let updatedTodos: iTodos[] = this.todos.map((todo) => {
      if (todo.id === $event) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    this.todos = updatedTodos;
    this.storageService.setTodos(this.namespace, this.todos);
  }

  deleteTodo($event): void {
    let updatedTodos: iTodos[] = this.todos.filter(
      (todo) => todo.id !== $event
    );
    this.todos = updatedTodos;
    this.storageService.setTodos(this.namespace, this.todos);
  }

  editTodo($event): void {
    let updatedTodos: iTodos[] = this.todos.map((todo) => {
      if (todo.id === $event.id) {
        todo.text = $event.text;
      }
      return todo;
    });
    this.todos = updatedTodos;
    this.storageService.setTodos(this.namespace, this.todos);
  }
}
