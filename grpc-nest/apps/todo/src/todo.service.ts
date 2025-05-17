import { Injectable } from '@nestjs/common';
import { PostTodoDto, Todo, Todos } from 'proto/todo';

@Injectable()
export class TodoService {
  private todos: Todo[] = [{
    id: 1, 
    description: 'first todo',
    isDone: false
  }];

    postTodo(postTodoDto:PostTodoDto){
      const todo: Todo = {
        id: this.todos.length + 1,
        description: postTodoDto.description,
        isDone: postTodoDto.isDone,
      };
      this.todos.push(todo);
      return todo;
    }
  
    getTodos():Todos {
      return {Todos: this.todos}
    }
}
