import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksController } from './controllers/books/books.controller';
import { Book } from './entities/book.entity';
import { Author } from './entities/author.entity';
import { BooksService } from './services/books/books.service';
import { AuthorsService } from './services/authors/authors.service';
import { AuthorsController } from './controllers/authors/authors.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Book, Author])],
  controllers: [BooksController, AuthorsController],
  providers: [BooksService, AuthorsService],
  exports: [BooksService, TypeOrmModule],
})
export class BooksModule {}
