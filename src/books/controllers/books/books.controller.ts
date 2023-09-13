import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  Res,
  // ParseIntPipe,
} from '@nestjs/common';
import { ParseIntPipe } from '../../../common/parse-int.pipe';
import { CreateBookDto } from '../../dtos/books.dto';
import { BooksService } from '../../services/books/books.service';

@Controller('books')
export class BooksController {

  constructor(private bookService: BooksService) {}

  @Get()
  getBooks() {
    return this.bookService.findAll();
  }

  @Get(':bookId/avg/pages')
  getAvg(@Param('bookId', ParseIntPipe) bookId: number) {
    return this.bookService.getAvgPagesPerChapter(bookId);
  }

  @Post()
  create(@Body() payload: CreateBookDto) {
    return this.bookService.create(payload);
  }
}
