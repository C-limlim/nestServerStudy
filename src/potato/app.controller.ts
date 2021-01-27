import { Body, Controller, Get, Param, Post, Delete, Patch } from '@nestjs/common';
import { timeStamp } from 'console';
import { identity } from 'rxjs';
import { AppService } from './app.service';
import { question } from '../entities/question.entity';
import { Potato } from '../entities/potatoes.entity';

@Controller('potatos')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/findAll')
  findAll() {
    return this.appService.findAll();
  }

  @Post('/insert')
  insert(@Body() information: Potato) {
    this.appService.append(information);
  }

  @Get('/:id')
  findID(@Param('id') id:string) {
    return this.appService.findID(id);
  }

  @Delete('/:id')
  deleteID(@Param('id') id:string) {
    this.appService.deleteID(id);
  }
}
