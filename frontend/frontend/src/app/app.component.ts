import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';  // Ensure HttpClientModule is imported
import { RouterModule } from '@angular/router';  // Remove .forRoot() here
import { routes } from './app.routes';  // Import your routes
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskListComponent } from './components/task-list/task-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    CommonModule,
    TaskFormComponent,
    TaskListComponent,
    HttpClientModule,  // Keep HttpClientModule
    RouterModule  // Remove .forRoot() here
  ]
})
export class AppComponent {
  title='frontend';
}
