import { Test, TestingModule } from '@nestjs/testing';
import { NotificaionController } from './notificaion.controller';
import { NotificaionService } from './notificaion.service';

describe('NotificaionController', () => {
  let notificaionController: NotificaionController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [NotificaionController],
      providers: [NotificaionService],
    }).compile();

    notificaionController = app.get<NotificaionController>(NotificaionController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(notificaionController.getHello()).toBe('Hello World!');
    });
  });
});
