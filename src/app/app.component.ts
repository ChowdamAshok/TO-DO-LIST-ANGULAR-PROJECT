import { Component } from '@angular/core';
import { TodoComponent } from './todo/todo.component'; // ✅ import your todo component

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoComponent], // ✅ add your component here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'to-do-and-pj';
}
