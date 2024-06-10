import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Guitar } from './guitars.entity';

@Injectable()
export class GuitarsService {
  constructor(
    @InjectRepository(Guitar)
    private guitarsRepository: Repository<Guitar>,
  ) {}

  findAll(): Promise<Guitar[]> {
    return this.guitarsRepository.find();
  }

  findOne(id: number): Promise<Guitar> {
    return this.guitarsRepository.findOneBy({ id });
  }

  create(guitar: Guitar): Promise<Guitar> {
    return this.guitarsRepository.save(guitar);
  }

  async update(id: number, guitar: Guitar): Promise<Guitar> {
    await this.guitarsRepository.update(id, guitar);
    return this.guitarsRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.guitarsRepository.delete(id);
  }
}

