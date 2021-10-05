import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todos-header',
  templateUrl: './todos-header.component.html',
  styleUrls: ['./todos-header.component.css'],
})
export class TodosHeaderComponent implements OnInit {
  text: string;
  @Output() onAddTodo: EventEmitter<string> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.onAddTodo.emit(this.text);
    this.text = '';
  }
}
