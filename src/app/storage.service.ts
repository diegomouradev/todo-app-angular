import { Injectable } from '@angular/core';
import { iTodos } from './todos-interface';
@Injectable({
  providedIn: 'root',
})
export class StorageService {
  todos: iTodos[];
  constructor() {}

  // initialize todos array if none is saved to localStorage already.
  getTodos(namespace): iTodos[] | [] {
    const storedTodos = localStorage.getItem(namespace);
    if (!storedTodos) {
      return [];
    } else {
      this.todos = JSON.parse(storedTodos);
      return this.todos;
    }
  }

  setTodos(namespace: string, todos: iTodos[]) {
    localStorage.setItem(namespace, JSON.stringify(todos));
  }
  // get todos array from localStorage is it already exits.
  // save updated todo array on "new todo", "updated todo", "deleted todo", "todo marked as completed".
}
