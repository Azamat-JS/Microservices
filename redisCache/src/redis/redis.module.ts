import { Module } from '@nestjs/common';
import { RedisService } from './redis.service';
import { RedisController } from './redis.controller';
import { CacheInterceptor, CacheModule } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-yet';
import { APP_INTERCEPTOR } from '@nestjs/core';


@Module({
  imports: [CacheModule.register(
    {
      ttl:10000,
      store: redisStore,
      host: 'localhost',
      port: 6379
    }
  )],
  controllers: [RedisController],
  providers: [RedisService, {
    provide: APP_INTERCEPTOR,
    useClass: CacheInterceptor
  }],
})
export class RedisModule {}
