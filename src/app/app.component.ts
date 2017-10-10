import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  text: string;
  stat = 10;
  constructor() {
    this.text = 'some-text'
  }

  changeName(){
    this.text = 'new text'
  }
}
