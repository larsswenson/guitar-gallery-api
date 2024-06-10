import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuitarsService } from './guitars.service';
import { GuitarsController } from './guitars.controller';
import { Guitar } from './guitars.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Guitar])],
  providers: [GuitarsService],
  controllers: [GuitarsController],
})
export class GuitarsModule {}

