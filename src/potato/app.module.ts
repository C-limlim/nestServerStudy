import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Potato } from '../entities/potatoes.entity';
import { question } from '../entities/question.entity';
import "reflect-metadata";

@Module({
  imports: [TypeOrmModule.forFeature([Potato, question])],
  controllers: [AppController],
  providers: [AppService],
})
export class PotatoModule {}
