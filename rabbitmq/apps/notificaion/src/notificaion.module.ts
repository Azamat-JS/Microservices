import { Module } from '@nestjs/common';
import { NotificaionController } from './notificaion.controller';
import { NotificaionService } from './notificaion.service';

@Module({
  imports: [],
  controllers: [NotificaionController],
  providers: [NotificaionService],
})
export class NotificaionModule {}
