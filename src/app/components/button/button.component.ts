import { Component, Input, OnInit, Output } from '@angular/core';
import { iTodos } from 'src/app/todos-interface';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() text: string = '';
  @Input() id: string = '';
  @Output() btnClick: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick($event): void {
    this.btnClick.emit($event);
  }
}
