import { Component, Input, OnInit } from '@angular/core';
import { iTodos } from 'src/app/todos-interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  @Input() todos: iTodos;

  constructor() {}

  ngOnInit(): void {}
}
