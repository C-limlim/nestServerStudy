import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionModule } from './question/app.module';
import "reflect-metadata";
import { PotatoModule } from './potato/app.module';

@Module({
  imports: [TypeOrmModule.forRoot(), QuestionModule, PotatoModule]})
export class AppModule {}
