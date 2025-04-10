import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // ✅ Add this

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ Include CommonModule here
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  tasks: { name: string; done: boolean }[] = [];
  newTask: string = '';

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push({ name: this.newTask.trim(), done: false });
      this.newTask = '';
    }
  }

  toggleDone(task: any) {
    task.done = !task.done;
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
