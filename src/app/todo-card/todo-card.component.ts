import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent implements OnInit {
  @Input() todoList;

  @Output() changeState = new EventEmitter();
  @Output() deleteCard  = new EventEmitter();

  todoData = 'test task';
  constructor() {

  }

  ngOnInit() {
    console.log(this.todoList);
  }

  deleteCardEmit(index){
    this.deleteCard.emit(index)
  }

  changeStateEmit(i) {
    this.changeState.emit(i);
  }

}
