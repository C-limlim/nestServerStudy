import { Body, Controller, Get, Param, Post, Delete, Patch, Ip, Query } from '@nestjs/common';
import { timeStamp } from 'console';
import { identity } from 'rxjs';
import { PotatoService } from './app.service';
import { question } from '../entities/question.entity';
import { Potato } from '../entities/potatoes.entity';
import { get } from 'http';
import { stringify } from 'querystring';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionModule } from 'src/question/app.module';
import { AppService } from 'src/question/app.service';


@Controller('potatos')
export class PotatoController {
  constructor(private readonly appService: PotatoService, private readonly questionService: AppService) {}



  @Post()
  async addNewReport(@Body() userApply, @Ip() Ip: string) {
    //userApply: ques_id, ques_ans, context, randomcode
    const db_answer = (await this.questionService.findById(userApply.ques_id)).ans
    const report = new Potato()
    
    if(userApply.ques_ans === db_answer) {
      report.ip = Ip
      report.context = userApply.context
      report.randomcode = userApply.randomcode
      this.appService.addNewReport(report)
      return "reported sucessfully"
    } else {
      return "wrong answer"
    }
  }

  @Get()
  findAll() {
    return this.appService.findAll()
  }

  @Get('/:status')
  async findByStatus(@Param('status') status: string) {
    return await this.appService.findByStatus(status)
  }

  @Patch('/:id')
  patchStatus(@Param('id') id: string, @Query('status') status: string ) {
    this.appService.patchStatus(id, status)
  }
}
