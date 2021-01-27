import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Potato {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  context: string;

  @Column()
  price: string;

  @Column()
  randomcode: string;

  @Column("timestamp")
  reportedAt: Date;

  @Column()
  ip: string;

}