import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CacheModule } from '@nestjs/cache-manager';
import { UsersModule } from './users/users.module';
import { ProdModule } from './prod/prod.module';
import { RedisModule } from './redis/redis.module';

@Module({
  imports: [CacheModule.register(), UsersModule, ProdModule, RedisModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
