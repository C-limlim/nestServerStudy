import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Potato } from '../entities/potatoes.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Potato)
    private usersRepository: Repository<Potato>,
  ) {}

  findAll() {
    return this.usersRepository.find();
  }

  append(information: Potato) {
    this.usersRepository.insert(information);
  }

  findID(id) {
    return this.usersRepository.findByIds(id);
  }

  deleteID(id) {
    this.usersRepository.delete(id);
  }
}
