import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class question {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  ques: string;

  @Column()
  ans: string;

}