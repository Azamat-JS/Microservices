import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProdService } from './prod.service';


@Controller('prod')
export class ProdController {
  constructor(private readonly prodService: ProdService) {}

  @Get()
  findAll() {
    return this.prodService.findAll();
  }

}
