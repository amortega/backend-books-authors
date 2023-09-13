import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository, FindOptionsWhere, Between } from 'typeorm';
import { CreateBookDto } from '../../dtos/books.dto'
import { Book } from '../../entities/book.entity';
import { Author } from '../../entities/author.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book) private bookRepo: Repository<Book>,
    @InjectRepository(Author) private authorRepo: Repository<Author>,
  ) {}

  async findAll() {
    return this.bookRepo.find({
      relations: ['authors'],
    });
  }

  async create(data: CreateBookDto) {
    const newBook = this.bookRepo.create(data);
    if (data.authorsIds) {
      const authors = await this.authorRepo.findBy({
        id: In(data.authorsIds),
      });
      newBook.authors = authors;
    }
    return this.bookRepo.save(newBook);
  }

  async getAvgPagesPerChapter(idBook: number) {
    const book = await this.bookRepo.findOneBy({ id: idBook });
    const avg = (book.pages / book.chapters).toFixed(2);
    return {
      idBook: book.id.toString(),
      avg: avg.toString(),
    };
  }
}
