import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Potato {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  context: string;

  @Column()
  randomcode: string;

  @Column({default: "reported"})
  status: string;

  @Column()
  ip: string;

}