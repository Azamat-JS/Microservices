import { Controller, Get } from '@nestjs/common';
import { TodoService } from './todo.service';
import { GrpcMethod } from '@nestjs/microservices';
import { PostTodoDto, Todos } from 'proto/todo';

@Controller()
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @GrpcMethod('TodoService', 'PostTodo')
  postTodo(postTodoDto:PostTodoDto){
    return this.todoService.postTodo(postTodoDto)
  }

  @GrpcMethod('TodoService', 'GetTodos')
  getTodos():Todos {
    return this.todoService.getTodos();
  }
}
  
