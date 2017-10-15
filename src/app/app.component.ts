import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  text: string;
  stat = 10;
  todoList: Array<any>=[];

  constructor() {
    this.text = 'some-text'
  }

  addTask(inputValue){
    if(inputValue.value !== '') {
      const newCard = {
        task: inputValue.value,
        done: false,
        time: new Date()
      };

      this.todoList.push(newCard)
    }

    inputValue.value = ''
  }

  changeState(index) {
    this.todoList[index].done = !this.todoList[index].done
  }

  deleteCard(i){
    console.log('test', i)
    this.todoList.splice(i, 1)
  }
}
