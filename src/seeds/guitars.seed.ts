import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Guitar } from '../guitars/guitars.entity';

@Injectable()
export class GuitarSeed {
  constructor(
    @InjectRepository(Guitar)
    private readonly guitarRepository: Repository<Guitar>,
  ) {}

  async run() {
    const existingGuitars = await this.guitarRepository.find();
    if (existingGuitars.length === 0) {
      const guitars = [
        { make: 'Epiphone', model: 'Casino', year: 1965, image: 'assets/epiphone-casino.jpg' },
        { make: 'Fender', model: 'Telecaster', year: 1952, image: 'assets/fender-telecaster.jpg' },
        { make: 'Gibson', model: 'Les Paul', year: 1959, image: 'assets/gibson-lespaul.jpg' },
        { make: 'Gibson', model: 'SG', year: 1961, image: 'assets/gibson-sg.jpg' },
        { make: 'Guild', model: 'Thunderbird', year: 1963, image: 'assets/guild-thunderbird.jpg' },
        { make: 'Rickenbacker', model: '360/12', year: 1964, image: 'assets/rickenbacker-36012.jpg' },
      ];
      await this.guitarRepository.save(guitars);
    }
  }
}


