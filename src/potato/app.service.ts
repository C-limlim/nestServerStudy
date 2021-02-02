import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Potato } from '../entities/potatoes.entity';

@Injectable()
export class PotatoService {
  constructor(
    @InjectRepository(Potato)
    private usersRepository: Repository<Potato>,
  ) {}

  addNewReport(report: Potato) {
   this.usersRepository.insert(report)
  }

  findAll() {
    return this.usersRepository.find()
  }

  async findByStatus(status: string) {
    return (await this.usersRepository.find()).filter((value) => value.status === status)
  }

  async patchStatus(id: string, status: string) {
    await this.usersRepository.update(id, {"status": status})
  }
}
