import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  newTask = '';
  tasks = [];
  completedTasks = [];

  public addTask() {
    if (this.newTask.trim() !== '') {
      this.tasks.push({ name: this.newTask.trim(), completed: false });
      this.newTask = '';
    }
  }

  public editTask(index: number) {
    this.tasks[index].name = prompt('Edit Task', this.tasks[index].name);
  }

  public deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  public markComplete(index: number) {
    this.tasks[index].completed = true;
    this.completedTasks.push(this.tasks.splice(index, 1)[0]);

  }
}
