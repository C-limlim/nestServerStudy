import { Body, Controller, Get, Param, Post, Delete, Patch } from '@nestjs/common';
import { timeStamp } from 'console';
import { identity } from 'rxjs';
import { AppService } from './app.service';
import { question } from '../entities/question.entity';

@Controller('questions')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  insert (@Body() report: question) {
    this.appService.insert(report);
  }
  
  @Get()
  findAll () {
    return this.appService.findAll();
  }

  @Delete('/:id')
  deleteByID(@Param('id') id:string) {
    return this.appService.deleteByID(id);
  }

}
