import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title="My Todos";
  todos=[
  {
  label:'Bootstrap',
  done:false,
  priority:3
  },
  {
  label:'Angular 2',
  done:true,
  priority:1
  },
  {
  label:'React',
  done:false,
  priority:3
  },
  {
  label:'Express',
  done:false,
  priority:5
  }
  ];
  
  addTodo(newTodoLabel){
  var newTodo={
  label: newTodoLabel,
  priority: 1,
  done: false
  };
  this.todos.push(newTodo);
  }
  deleteTodo(todo){
  this.todos=this.todos.filter(t => t.label !== todo.label );
  }
  }


