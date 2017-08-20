import { Component, Input } from '@angular/core';

@Component({
  selector: 'task-card',
  templateUrl: './taskCard.html',
})

export class TaskCardComponent  {
    taskDescription: string;
    taskStatus: string;

    @Input()
    widget: string;

    constructor() {
        this.taskDescription = '';
        this.taskStatus = 'new';
    }
}
