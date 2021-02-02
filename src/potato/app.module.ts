import { Module } from '@nestjs/common';
import {PotatoController } from './app.controller';
import { PotatoService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Potato } from '../entities/potatoes.entity';
import { question } from '../entities/question.entity';
import "reflect-metadata";
import { AppController } from 'src/question/app.controller';
import { AppService } from 'src/question/app.service';

@Module({
  imports: [TypeOrmModule.forFeature([Potato, question])],
  controllers: [PotatoController, AppController],
  providers: [PotatoService,AppService],
})
export class PotatoModule {}
