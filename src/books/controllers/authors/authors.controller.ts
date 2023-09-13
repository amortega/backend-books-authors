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
import { CreateAuthorDto } from '../../dtos/books.dto';
import { AuthorsService } from '../../services/authors/authors.service';

@Controller('authors')
export class AuthorsController {

  constructor(private authorService: AuthorsService) {}

  @Get()
  getAuthors() {
    return this.authorService.findAll();
  }

  @Post()
  create(@Body() payload: CreateAuthorDto) {
    return this.authorService.create(payload);
  }
}
