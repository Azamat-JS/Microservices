import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from '../database/database.module';
import { ProductController } from './product.controller';
import { ProductMicroService } from './product.service';
import { DatabaseService } from '../database/database.service';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController, ProductController],
  providers: [AppService, ProductMicroService],
})
export class AppModule {}
