import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuitarsModule } from './guitars/guitars.module';
import { Guitar } from './guitars/guitars.entity';
import { GuitarSeed } from './seeds/guitars.seed';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'lars_swenson',
      password: 'six_string',
      database: 'guitar_gallery',
      entities: [Guitar],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Guitar]), 
    GuitarsModule,
  ],
  providers: [GuitarSeed],
})
export class AppModule {}


