import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './components/mainTemplate.html',
})

export class AppComponent  {
  widgetList: string[];
  counter: number;

  constructor() {
    this.counter = 1;
    this.widgetList = ['Task-1'];
  }

  addTask() {
    this.widgetList.push('Task-'+ ++this.counter);
  }
}
