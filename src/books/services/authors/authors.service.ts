import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAuthorDto } from '../../dtos/books.dto';
import { Author } from '../../entities/author.entity';

@Injectable()
export class AuthorsService {
  constructor(
    @InjectRepository(Author) private authorRepo: Repository<Author>
  ) {}

  async findAll() {
    return this.authorRepo.find({
      relations: ['books'],
    });
  }

  async create(data: CreateAuthorDto) {
    const newAuthor = this.authorRepo.create(data);
    return this.authorRepo.save(newAuthor);
  }
}
