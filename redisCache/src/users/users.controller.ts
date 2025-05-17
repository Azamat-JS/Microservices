import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors } from '@nestjs/common';
import { UsersService } from './users.service';
import { CacheInterceptor, CacheTTL } from '@nestjs/cache-manager';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}


  @Get('items')
  @CacheTTL(5000)
  @UseInterceptors(CacheInterceptor)
  findAll() {
    return this.usersService.findAll();
  }

}
