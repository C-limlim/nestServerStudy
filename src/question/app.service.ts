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

  async findById(Id: string) {
    return await this.usersRepository.findOne({id:Id});
  }

  deleteByID(id: string) {
    this.usersRepository.delete(id);
  } 

  async pickOneRandom() {
    const totalNum= await this.usersRepository.count()
    const index :string = Math.floor(Math.random() * totalNum)+ 1 + ""
    return this.usersRepository.find({id: index})

  }
  
}