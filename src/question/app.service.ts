import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { question } from '../entities/question.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(question)
    private usersRepository: Repository<question>,
  ) {}

  insert(report: question) {
    this.usersRepository.insert(report);
  }

  findAll() {
    return this.usersRepository.find();
  }

  deleteByID(id: string) {
    this.usersRepository.delete(id);
  } 


}
