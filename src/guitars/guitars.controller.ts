import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { GuitarsService } from './guitars.service';
import { Guitar } from './guitars.entity';

@Controller('guitars')
export class GuitarsController {
  constructor(private readonly guitarsService: GuitarsService) {}

  @Get()
  findAll(): Promise<Guitar[]> {
    return this.guitarsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Guitar> {
    return this.guitarsService.findOne(id);
  }

  @Post()
  create(@Body() guitar: Guitar): Promise<Guitar> {
    return this.guitarsService.create(guitar);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() guitar: Guitar): Promise<Guitar> {
    return this.guitarsService.update(id, guitar);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.guitarsService.remove(id);
  }
}

