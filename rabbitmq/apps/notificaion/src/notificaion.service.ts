import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificaionService {
  getHello(): string {
    return 'Hello World!';
  }
}
