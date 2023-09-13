import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { AppController } from './app.controller';
import { DatabaseModule } from './database/database.module';
import { environments } from './environments';
import { BooksModule } from './books/books.module';
import config from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        DATABASE_NAME: Joi.string().required(),
        DATABASE_PORT: Joi.number().required(),
      })
    }),
    HttpModule,
    DatabaseModule,
    BooksModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
