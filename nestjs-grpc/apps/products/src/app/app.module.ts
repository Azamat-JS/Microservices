import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductController } from './product.controller';


@Module({
  controllers: [AppController, ProductController],
  providers: [AppService],
})
export class AppModule {}
