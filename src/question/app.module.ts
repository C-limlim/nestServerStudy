import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {question} from '../entities/question.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import "reflect-metadata";

@Module({
  imports: [TypeOrmModule.forFeature([question])],
  controllers: [AppController],
  providers: [AppService],
})
export class QuestionModule {}
