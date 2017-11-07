import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css'],
})
export class TodoTaskComponent implements OnInit {

  todotaskList: string[] = [];
  taskInput: string;
  isEditTask = false;
  editIndex: number;
  constructor() { }

  ngOnInit() {
  }
  addTask() {
    console.log('addTask', this.taskInput);
    if (this.taskInput) {
      if (!!this.isEditTask) { // edit task
        this.todotaskList.splice(this.editIndex, 1, this.taskInput);
        this.taskInput = '';
      } else {
        this.todotaskList.push(this.taskInput);
        this.taskInput = '';
      }
      this.isEditTask = false;
    }
  }
  editTask(index: number): void {
    console.log('editTask', index);
    this.taskInput = this.todotaskList[index];
    this.isEditTask = true;
    this.editIndex = index;
  }
  deleteTask(index: number): void {
    console.log('deleteTask', index);
    this.todotaskList.splice(index, 1);
  }
}
