import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Guitar {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  make: string;

  @Column()
  model: string;

  @Column()
  year: number;

  @Column()
  image: string;
}
