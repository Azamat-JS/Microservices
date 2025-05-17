import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { PostTodoDto, TODO_SERVICE_NAME, TodoServiceClient } from 'proto/todo';

@Injectable()
export class AppService implements OnModuleInit{
  private todoServiceClient: TodoServiceClient;

constructor(@Inject('todo') private clientGrpc: ClientGrpc){}

onModuleInit() {
  this.todoServiceClient = this.clientGrpc.getService<TodoServiceClient>
  (TODO_SERVICE_NAME);
}
  postTodo(postTodoDto: PostTodoDto) {
    return this.todoServiceClient.postTodo(postTodoDto)
  }

  getTodos(){
    return this.todoServiceClient.getTodos({});
  }
}
